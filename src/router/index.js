import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/PropertyDetails.vue'),
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/search.vue'),
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/profile',
    name: 'login',
    component: () => import('../views/Profile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
