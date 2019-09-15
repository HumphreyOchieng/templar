import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export async function generateToken (payload) {
	return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '24h'});
}