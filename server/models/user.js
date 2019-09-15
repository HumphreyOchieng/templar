import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const SALT_ROUNDS = 10;

const UserSchema = Schema({
	name: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

UserSchema.pre('save', async function (next){
	let user = this;
	user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
	next();
});

UserSchema.methods.verifyPassword = async function (input) {
	let user = this;
	let result = await bcrypt.compare(input, user.password);
	if (!result) {
		throw new Error ("Password is incorrect");
	}
	return result;
};

UserSchema.statics.addUser = async function ({email, password}) {
	let isEmailTaken = await this.findOne({email});
	if (isEmailTaken) {
		throw new Error ("This email is being used by an existing account. Try a different one.");
	}
	let newUser = new this({email, password});
	let user = await newUser.save();
	return user;
}

UserSchema.statics.findByEmail = async function (email) {
	let user = await this.findOne({email});
	if(!user) {
		throw new Error("No account uses this email address")
	}
	return user;
}

export default mongoose.model("User", new Schema(UserSchema, {timestamps: true}));