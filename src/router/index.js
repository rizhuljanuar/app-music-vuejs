import { createRouter, createWebHistory } from 'vue-router';
import useUserStore from '@/stores/user';

const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Manage = () => import('@/views/Manage.vue');
const Song = () => import('@/views/Song.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/manage-music',
    //alias: 'manage', // solusi kedua
    name: 'manage',
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter manage')
      next();
    },
    meta: {
      requiresAuth: true
    }
  },
  // solusi pertama yg saya suka,dari jangaka pendek merugikan tapi cocok jangka panjang buat seo enginie, agar mesin pencari mengetahui perubahan struktur url
  {
    path: '/manage',
    redirect: '/manage-music'
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song
  },
  {
    path: '/:clearAll(.*)*',
    redirect: { name: 'home' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {

  if (!to.meta.requiresAuth) {

    next();
    return;
  }

  const userStore = useUserStore();

  if (userStore.isLogginUser) {
    next();
  } else {
    next({ name: 'home' });
  }

})

export default router
