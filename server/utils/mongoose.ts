import mongoose from "mongoose";

const MmongoURI = process.env.MONGODB_URI || "";

if (!MmongoURI) {
	throw new Error("MONGODB_URI environment variable is not defined");
}

interface ConnectionCache {
	conn: typeof mongoose | null;
	promise: Promise<typeof mongoose> | null;
}

// Безопасное приведение типа для global
const globalForMongoose = globalThis as unknown as {
	mongoose: ConnectionCache | undefined;
};

const cached: ConnectionCache = globalForMongoose.mongoose ?? {
	conn: null,
	promise: null,
};

if (!globalForMongoose.mongoose) {
	globalForMongoose.mongoose = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
	if (cached.conn) {
		console.log("Using cached MongoDB connection");
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			serverSelectionTimeoutMS: 5000,
			socketTimeoutMS: 45000,
		};

		console.log("Creating new MongoDB connection...");
		cached.promise = mongoose
			.connect(MmongoURI, opts)
			.then((mongooseInstance) => {
				console.log("MongoDB connected successfully");
				return mongooseInstance;
			})
			.catch((error) => {
				console.error("MongoDB connection failed:", error);
				cached.promise = null;
				throw error;
			});
	}

	try {
		cached.conn = await cached.promise;
	} catch (error) {
		cached.promise = null;
		throw error;
	}

	return cached.conn;
}

// Обработка отключения при завершении приложения
process.on("SIGINT", async () => {
	if (cached.conn) {
		await cached.conn.disconnect();
		console.log("MongoDB connection closed through app termination");
		process.exit(0);
	}
});

export default connectToDatabase;
