import { createRouter, createWebHistory } from 'vue-router';
import OrderPage from '../views/OrderPage.vue';  // Correct path to OrderPage.vue

const routes = [
  {
    path: '/',
    name: 'OrderPage',
    component: OrderPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
