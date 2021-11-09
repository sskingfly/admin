import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    redirect: '/welcome',
    children: [
      {
        path: 'welcome',
        component: () => import('../views/Welcome.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    component: () => import('../views/PageNoFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router