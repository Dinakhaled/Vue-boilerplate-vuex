import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./Auth";
import posts from "./Posts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    posts
  }
})
