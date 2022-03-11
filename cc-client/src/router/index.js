import Vue from 'vue';
import VueRouter from 'vue-router';
import Camera from '../views/Camera.vue';
import Library from '../views/Library.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Camera',
    component: Camera,
  },
  {
    path: '/library',
    name: 'Color Library',
    component: Library,
  },
  {
    path: '/about',
    name: 'App Info',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
