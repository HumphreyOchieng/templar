import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {ApolloServer} from "apollo-server-express";
import cors from "cors";

import typeDefs from "./api/schema.js";
import resolvers from "./api/resolvers.js";

// Set up environmental variables
dotenv.config();

// Set up MongoDB database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", () => {
	console.log("> An error while connecting to the database");
});
db.once("open", () => {
	console.log("> Successfully connected to the database");
});

const app = express();
app.use(cors());

// Set up Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({app});

app.listen({port: process.env.PORT || 4000}, () => {
	console.log(`Server ready at http:localhost:${process.env.PORT}`);
});