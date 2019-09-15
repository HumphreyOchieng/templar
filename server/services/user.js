import UserModel from "../models/user.js";

export async function createAccount({email, password}) {
	let user = await UserModel.addUser({email, password});
	return user;
}

export async function verifyUser({email, password}) {
	let user = await UserModel.findByEmail(email);
	await user.verifyPassword(password);
	return user;
}