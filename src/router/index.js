import { createRouter, createWebHistory } from 'vue-router'
import PortafolioView from '@/views/PortafolioView.vue'
import HojaDeVida from '@/views/HojaDeVida.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortafolioView,
    },
    {
      path: '/hoja-de-vida',
      name: 'hoja-de-vida',
      component: HojaDeVida,
    },
  ],
})

export default router
