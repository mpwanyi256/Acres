import * as firebase from 'firebase';
import router from '../../router';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    autoSignIn({ commit }, payload) {
      if (payload) {
        /* Check Auth Provider
        const PROFILES = firebase.firestore().collection('Profiles');
        const AUTH_PROVIDER = payload.provider;
        switch (AUTH_PROVIDER) {
          case '':
            break;
        } */

        commit('setUser', payload);
      } else {
        commit('setUser', null);
        router.push({ name: 'Home' });
      }
    },
    authLogout() {
      firebase.auth().signOut().then(() => { router.push({ name: 'Home' }); });
    },
  },
  getters: {
    authUser: (state) => state.user,
    routes(state) {
      let mroutes;
      if (state.user) {
        mroutes = [
          { name: 'Liked Properties', icon: 'mdi-thumb-up', path: '/liked' },
          { name: 'My Bookings', icon: 'mdi-heart', path: '/Bookings' },
        ];
      } else {
        mroutes = [];
      }
      return mroutes;
    },
  },
};
