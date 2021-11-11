import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/welcome',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'welcome',
        component: () => import('../views/Welcome.vue'),
        meta: {
          title: '欢迎'
        }
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