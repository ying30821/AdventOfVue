import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/day1',
    alias: '/',
    name: 'Day1',
    component: () => import('../views/Day1.vue'),
  },
  {
    path: '/day2',
    name: 'Day2',
    component: () => import('../views/Day2.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;