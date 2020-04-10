// =========== Example ===========
import { axiosInstance } from "../../network/base";

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const actions = {
  getPosts: ({ commit }) => {
    axiosInstance.get('/posts').then(({ data }) => {
      commit('setPosts', data)
    })
  },
};

const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}