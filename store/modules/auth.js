const state = () => ({
  user: null,
});

const getters = {
  user: state => {
    return state.user;
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  setUser({ commit }, user) {
    commit('setUser', user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};