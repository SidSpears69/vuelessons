import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/add',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/phones',
    name: 'Phones',
    component: () => import('@/views/Phones.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/Users.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/edit/:id',
    component: () => import('@/views/UserEdit.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
const test = false
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (test == true) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
