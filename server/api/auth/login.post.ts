import jwt from "jsonwebtoken";
import { defineEventHandler, readBody } from "h3";
import type { IPersonDataDTO } from "../../../types/PersonDataDTO";
import connect from '~/server/utils/mongoose'
import  PersonData from '~/server/models/PersonData'
import type {IPersonData} from '~/server/models/PersonData'

export default defineEventHandler(async (event) => {

	const body = await readBody(event);
	const { login, password } = body;

	await connect();
	const user = (await PersonData.find({ login, password }).exec())[0];
	// console.log(`>>> user: `, user);
	if (!user) {
		throw createError({
			statusCode: 401,
			statusMessage: "Неверные учетные данные",
		});
	}

	const config = useRuntimeConfig();

	let secret = config?.jwtSecret;
	if (typeof secret !== "string" || !secret) {
		throw new Error("JWT secret is not configured");
	}
	const token = jwt.sign({ userId: user.login }, secret, { expiresIn: "1h" });
	return { token, user };
});
