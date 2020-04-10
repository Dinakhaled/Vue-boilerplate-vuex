// =========== Example ===========
const state = {
  token: JSON.parse(localStorage.getItem('token')) === true ? true : null
};

const getters = {
  isLoggedIn: state => state.token
};

const actions = {
  login: ({ commit }) => {
    localStorage.setItem('token', true);
    commit('setToken', true)
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