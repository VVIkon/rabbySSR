import jwt from "jsonwebtoken";
import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
	const publicPaths = ['/', '/login', '/api/auth/login'];
	if (publicPaths.includes(event.path || ' ')) return;

	const authHeader = event.node.req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		throw createError({
			statusCode: 401,
			statusMessage: "Требуется авторизация",
		});
	}

	try {
		const config = useRuntimeConfig();
		let secret = config?.jwtSecret;
		if (typeof secret !== "string" || !secret) {
			throw new Error("JWT secret is not configured");
		}
		const decoded = jwt.verify(token, secret);
		console.log(`>>> decoded: `, decoded);
		event.context.user = decoded;
	} catch (err) {
		throw createError({
			statusCode: 403,
			statusMessage: "Недействительный токен",
		});
	}
});
