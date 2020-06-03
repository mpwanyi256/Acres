import Vue from 'vue';
import VueRouter from 'vue-router';
import { mapGetters } from 'vuex';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/PropertyDetails.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/search.vue'),
  },
  {
    path: '/profile',
    name: 'login',
    component: () => import('../views/Profile.vue'),
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = mapGetters(['authUser']);
  if (to.matched.some((record) => record.meta.auth)) {
    if (isLoggedIn) {
      next();
    } else {
      next({
        path: '/',
      });
    }
    /* firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next({
          path: '/',
        });
      }
    }); */
  } else if (to.matched.some((record) => record.meta.guest)) {
    next();
  } else {
    next();
  }
});

export default router;
