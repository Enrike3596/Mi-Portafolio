import { createRouter, createWebHistory } from 'vue-router'
import PortafolioView from '@/views/PortafolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortafolioView,
    },
  ],
})

export default router
