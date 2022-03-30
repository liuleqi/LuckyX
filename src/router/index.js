import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Index.vue')
  },
  {
    path: '/rtc',
    name: 'RTC',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue')
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
    path: '/born',
    name: 'Born',
    component: ()=>import('../views/Born.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: ()=>import("../views/Header.vue")
  },
  {
    path: '/name',
    name: 'Name',
    component: ()=>import("../views/Name.vue")
  },
  {
    path: '/zoom',
    name:'Zoom',
    component: ()=>import('../views/Zoom.vue')
  },
  {
    path: '/password',
    name: 'Password',
    component: ()=>import('../views/Password.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
