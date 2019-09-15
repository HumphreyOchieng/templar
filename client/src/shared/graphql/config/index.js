import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
	uri :process.env.APP_URI
});

export default apolloClient;