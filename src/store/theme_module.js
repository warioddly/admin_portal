
export default {
  namespaced: true,
  state: {
    condensed: false,
    theme: "light",
    boxed: false,
  },
  getters: {

    condensed: state => state.condensed,

    theme: state => state.theme,

    boxed: state => state.boxed,

  },
  mutations: {

    SET_CONDENSE(state, payload) {
      state.condensed = payload
    },

    SET_THEME(state, payload) {
      state.theme = payload
    },


    SET_BOX_TYPE(state, payload) {
      state.boxed = payload
    },


  },
  actions: {

    async setCondenseType(context) {
      context.commit('SET_CONDENSE', false);
    },


    async setTheme(context) {
      context.commit('SET_THEME', "light");
    },


    async setBoxedType(context) {
      context.commit('SET_BOX_TYPE', false);
    },

  },
}
