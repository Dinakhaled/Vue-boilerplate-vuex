// =========== Example ===========
const state = {
  token: null
};

const getters = {
  isLoggedIn: state => state.token
};

const actions = {
  login: ({ commit }) => {
    localStorage.setItem('token', true);
    commit('setToken', true)
    // history.pushState('/home')
  },

  logout: ({ commit }) => {
    localStorage.setItem('token', false);
    commit('setToken', null)
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}