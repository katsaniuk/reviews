import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ReviewPage from '../pages/ReviewPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: ReviewPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
