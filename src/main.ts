import { createHead } from '@vueuse/head';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'layouts-generated';
import generatedRoutes from 'virtual:generated-pages';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

import App from './App.vue';

createApp(App).use(createHead()).use(router).mount('#app');
