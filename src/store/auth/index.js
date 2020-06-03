import * as firebase from 'firebase';
import router from '../../router';

export default {
  state: {
    user: null,
    authDialog: false,
  },
  mutations: {
    toggleDialog(state, payload) {
      state.authDialog = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    openAuthDialog({ commit }) {
      commit('toggleDialog', true);
    },
    closeAuthDialog({ commit }) {
      commit('toggleDialog', false);
    },
    autoSignIn({ commit }, payload) {
      if (payload) {
        commit('setUser', payload);
      } else {
        commit('setUser', payload);
        router.push({ name: 'Home' });
      }
    },
    authLogout() {
      firebase.auth().signOut().then(() => { router.push({ name: 'Home' }); });
    },
  },
  getters: {
    authUser: (state) => state.user,
    authDialog: (state) => state.authDialog,
  },
};
