import Router from 'vue-router';
import Main from '@/modules/main/main.vue';
import DashboardPage from '@/pages/DashboardPage.vue';
import SearchPage from '@/pages/SearchPage.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/dashboard',
          component: DashboardPage,
        },
        {
          path: '/search',
          component: SearchPage,
        },
      ],
    },
  ],
});
