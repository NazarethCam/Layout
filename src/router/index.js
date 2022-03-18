import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: () => import('../views/Buscar.vue')
  },
  {
    path: '/acercaDe',
    name: 'AcercaDe',
    component: () => import('../views/AcercaDe.vue')
  },
  {
    path: '*',
    name: 'NotFound.vue',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
