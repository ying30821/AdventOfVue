import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/day1',
    alias: '/',
    name: 'Day1',
    component: () => import('../views/Day1.vue'),
  },
];

const handleAddRoute = () => {
  for (let i = 2; i <= 10; i++) {
    routes.push({
      path: `/day${i}`,
      name: `Day${i}`,
      component: () => import(`../views/Day${i}.vue`),
    });
  }
};

handleAddRoute();

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
