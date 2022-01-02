import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Section from '../views/Section.vue'
import CreateCourse from '../views/CreateCourse.vue'
import Browse from '../views/Browse'


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
    path: '/course/:courseId',
    name: 'Course',
    component: Course,
  },
  {
    path: '/course/:courseId/:sectionId',
    name: 'Section',
    component: Section
  },
  {
    path: '/browse/:category',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/create-course',
    name: 'CreateCourse',
    component: CreateCourse
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
