import Vue from 'vue';
import { router } from "./routes";
import App from './App.vue';
import store from "./store";
import { i18n } from '@/assets/local/i18n';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
