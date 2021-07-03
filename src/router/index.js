import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UsersList from '@/views/Users.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    component: UsersList
  }
]
const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
