import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const lazyLoad = (view) => {
  return() => import(`@/views/${view}.vue`)
}

export const router = new VueRouter({
  mode: 'history',
  routes: [
  { path: '/', component: lazyLoad('Home') },
  { path: '/about', component: lazyLoad('AboutUs') }
]
})