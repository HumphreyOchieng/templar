import Vue from 'vue'
import Vuex from 'vuex'
import ApolloClient from '@/shared/graphql/config/index.js'
import SignUpUser from '@/shared/graphql/mutations/SignUpUser.gql'
import LogInUser from '@/shared/graphql/mutations/LogInUser.gql'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		projectTemplate: {
			title: "",
			id: ""
		},
		isModalVisible: false,
		modalConfig: {
			title: 'Title',
			body: 'Some body.'
		}
	},
	mutations: {
		showModal(state) {
			state.isModalVisible = true;
		},
		hideModal(state) {
			state.isModalVisible = false;
		}
	},
	actions: {
		signUp: function (context, payload) {
			console.log("Sending data");
			ApolloClient.mutate({
				mutation: SignUpUser,
				variables: {
					email: payload.email,
					password: payload.password
				}
			}).then(result => {
				window.alert(JSON.stringify(result));
				console.log(result);
			}).catch(err => {
				window.alert(err);
				console.log(err.message);
			});
		},
		logIn: function (context, payload) {
			console.log("Logging in");
			ApolloClient.mutate({
				mutation: LogInUser,
				variables: {
					email: payload.email,
					password: payload.password
				}
			}).then(result => {
				window.alert(JSON.stringify(result));
				console.log(result);
			}).catch(err => {
				window.alert(err);
				console.log(err.graphQLErrors.map(x => x.message));
			})
		}
	}
})
