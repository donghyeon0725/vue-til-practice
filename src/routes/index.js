import Vue from 'vue';
import VueRouter from 'vue-router';

const LoginPage = () => import('@/views/LoginPage.vue');
const SignupPage = () => import('@/views/SignupPage.vue');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
    {
      path: '*',
      component: () => import('@/views/NotFountPage.vue'),
    },
  ],
});
