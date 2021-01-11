import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
    {
      path: '/',
      name: 'login',
      component:  () => import( '../views/login/login.vue')
    },
      {
        path: '/login',
        name: 'login',
        component: () => import( '../views/login/login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import( '../views/login/register.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children : [
      {
        path: '/',
        name: 'lieb',
        component: () => import( '../views/shangp/lieb.vue')
      },
      {
        path: '/lieb',
        name: 'lieb',
        component: () => import( '../views/shangp/lieb.vue')
      },
      {
        path: '/xinz',
        name: 'xinz',
        component: () => import( '../views/shangp/xinz.vue')
      },
      {
        path: '/xingq',
        name: 'xingq',
        component: () => import( '../views/shangp/xingq.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
