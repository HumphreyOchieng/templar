import {gql} from "apollo-server-express";

const typeDefs = gql`
	type User {
		id: String!,
		name: String,
		email: String!
	}

	type AuthPayload {
		token: String!,
		user: User!
	}
	
	type Query {
		test: String,
		findUser (email: String!): User!,
		allUsers: [User!]!
	}

	type Mutation {
		signUp (email:String!, password:String!): AuthPayload,
		logIn (email:String!, password:String!): AuthPayload
	}
`;

export default typeDefs;