import Vue from 'vue';
import { router } from "./routes";
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
