import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Section from '../views/Section.vue'
import CreateCourse from '../views/CreateCourse.vue'
import Browse from '../views/Browse'
import Login from '../views/Login'
import Register from '../views/Register'
import ForgotPassword from '../views/ForgotPassword'
import Profile from '../views/Profile'
import NotFound from '../views/NotFound'

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
    // check if admin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
