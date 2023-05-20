import { createRouter, createWebHistory } from 'vue-router'
import LPView from '../views/LandingPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LPView },

  ]
})

export default router
