import { createRouter, createWebHistory } from 'vue-router'
import LPView from '../views/LandingPageView.vue'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
// import DashuserView from '../views/User/DashuserView.vue'
// import DashadminView from '../views/Admin/DashadminView.vue'
// import DashsupadminView from '../views/SuperAdmin/DashsupadminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LPView },
    { path: '/login', component: LoginView},
    { path: '/dashboard', component:DashboardView},
    // { path: '/dashboard-superadmin', component:DashsupadminView},
    // { path: '/dashboard-admin', component:DashadminView},
    // { path: '/dashboard-user', component:DashuserView},

  ]
})

export default router
