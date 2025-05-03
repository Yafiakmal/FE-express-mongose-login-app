import { createRouter, createWebHistory } from 'vue-router'
// import Dashboard from '../layouts/Main.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/profile', component: Profile }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
