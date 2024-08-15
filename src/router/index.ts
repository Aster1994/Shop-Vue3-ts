import { createRouter, createWebHistory } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { type Ref, ref } from 'vue'
import type { User } from '@/types/User'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: 'authLayout',
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: 'defaultLayout',
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: 'defaultLayout',
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to) => {
  const userStorage = useStorage('userStorage', ref({}) as Ref<User>)
  if (to.meta.requiresAuth && !userStorage.value.id) return '/login'
  if (to.meta.layout === 'authLayout' && userStorage.value.id) return `user/${userStorage.value.id}`
})
export default router
