import Router from 'vue-router';
import Main from '@/modules/main/main.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});
