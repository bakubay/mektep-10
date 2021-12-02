import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/course/:name',
    name: 'Course',
    component: Course
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
