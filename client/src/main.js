import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import apolloClient from '@/shared/graphql/config/index.js'
import VueApollo from 'vue-apollo';

import '@/shared/icons'

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
	defaultClient: apolloClient
});

Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
