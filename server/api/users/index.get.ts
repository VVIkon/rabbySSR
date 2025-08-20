import { defineEventHandler } from "h3";
// import { mockUsers } from "../users/mock.users";
import connect from '~/server/utils/mongoose'
import PersonData from '~/server/models/PersonData'

export default defineEventHandler(async (event) => {
	await connect()
  	const users = await PersonData.find({})
	if (users) {
		return users.map((user) => ({
			id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
		}));
	}
	return []
});
