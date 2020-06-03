import Vue from 'vue';
import * as firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_KapYLzjmCl9ZCYNU3zANx-7rfC8DLuE',
      authDomain: 'acres-277021.firebaseapp.com',
      databaseURL: 'https://acres-277021.firebaseio.com',
      projectId: 'acres-277021',
      storageBucket: 'acres-277021.appspot.com',
      messagingSenderId: '847605464259',
      appId: '1:847605464259:web:b1a3868ebf30351c9d3676',
      measurementId: 'G-HSYR9HXZF6',
    });
    firebase.firestore().settings({
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
    });
    firebase.firestore().enablePersistence();
  },
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
