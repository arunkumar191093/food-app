import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'ProductDetails',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
