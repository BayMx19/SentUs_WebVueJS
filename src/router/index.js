import { createRouter, createWebHistory } from 'vue-router'
import LPView from '../views/LandingPageView.vue'
import LoginView from '../views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LPView },
    { path: '/login', component: LoginView}

  ]
})

export default router
