import Vue from 'vue';
import VueRouter from "vue-router";
import Guards from "./Guards";

Vue.use(VueRouter);

const lazyLoad = (view) => {
  return() => import(`@/views/${view}.vue`)
}

export const router = new VueRouter({
  mode: 'history',
  routes: [
  { path: '/', component: lazyLoad('Home') },
  { path: '/about',
    beforeEnter : Guards,
    component: lazyLoad('AboutUs') },
  { path: "*", component: lazyLoad('NotFound') }
]
})