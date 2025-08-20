import { defineEventHandler } from "h3";
import connect from "~/server/utils/mongoose";
import PersonData from "~/server/models/PersonData";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id");
	await connect();
	const user = await PersonData.findById(id).exec();

	// const users = await User.find({});
	// if (users) {
	// 	user = users.find((u) => u.id === id);
	// }
	if (!user) {
		throw createError({
			statusCode: 404,
			statusMessage: "Пользователь не найден",
		});
	}

	return user;
});
