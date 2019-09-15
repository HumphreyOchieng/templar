import User from "../models/user.js";
import * as UserService from "../services/user.js";
import * as AuthService from "../services/auth.js";

const SALT_ROUNDS = 10;

const resolvers = {
	Query: {
		test: () => "Hello there",
		async findUser(root, {email}) {
			return User.findOne({email});
		},
		async allUsers () {
			return User.find();
		}
	},
	Mutation: {
		async signUp(root, {email, password}) {
			let user = await UserService.createAccount({email, password});
			let token = await AuthService.generateToken({id: user.id});
			return {user, token};
		},
		async logIn(root, {email, password}) {
			let user = await UserService.verifyUser({email, password})
			let token = await AuthService.generateToken({id: user.id});
			return {user, token};
		}
	}
};

export default resolvers;