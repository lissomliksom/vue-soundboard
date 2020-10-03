import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jungle from '../views/Jungle.vue'
import Cavern from '../views/Cavern.vue'
import Temple from '../views/Temple.vue'
import Combat from '../views/Combat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jungle',
    name: 'Jungle',
    component: Jungle
  },
  {
    path: '/cavern',
    name: 'Cavern',
    component: Cavern
  },
  {
    path: '/temple',
    name: 'Temple',
    component: Temple
  },
  {
    path: '/combat',
    name: 'Combat',
    component: Combat
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
