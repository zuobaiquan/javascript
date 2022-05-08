import { createRouter, createWebHashHistory } from 'vue-router';

import select from '@/pages/select/index.vue';
import index from '@/pages/index/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: index,
    },
    {
      path: '/select',
      name: 'Select',
      component: select,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
