import Vue from 'vue'
import Router from 'vue-router'

import Tasks from '@/modules/tasks'
import Projects from '@/modules/tasks/views/projects.vue'
import Project from '@/modules/tasks/views/project.vue'
import Calendar from '@/modules/calendar'
import Notes from '@/modules/notes'
import Profile from '@/modules/profile'
import Settings from '@/modules/profile/views/settings'
import LogIn from '@/modules/profile/views/login'
import SignUp from '@/modules/profile/views/signup'
import ForgotPassword from '@/modules/profile/views/forgot-password'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      meta: {layout: 'default'}
    },
    {
      path: '/projects',
      component: Tasks,
      children: [
        {
          name: 'projects',
          path: 'all',
          component: Projects,
          meta: {layout: 'default'}
        },
        {
          name: 'project',
          path: '/project',
          component: Project
        }
      ]
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile,
      meta: {layout: 'default'},
      children: [
        {
          name: 'settings',
          path: 'settings',
          component: Settings,
          meta: {layout: 'default'}
        },
        {
          name: 'login',
          path: '/login',
          component: LogIn,
          meta: {layout: 'no-bars'}
        },
        {
          name: 'signup',
          path: '/signup',
          component: SignUp,
          meta: {layout: 'no-bars'}
        },
        {
          name: 'forgot-password',
          path: '/forgot-password',
          component: ForgotPassword,
          meta: {layout: 'no-bars'}
        }
      ]
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes,
      meta: {layout: 'default'}
    },
    {
      path: '',
      redirect: {name: 'calendar'}
    }
  ]
})
