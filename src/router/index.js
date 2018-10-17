import Vue from 'vue'
import Router from 'vue-router'
import StudentLogin from '@/views/student/login'
import WebIndex from '@/views/web/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/s_login',
      name: 'StudentLogin',
      component: StudentLogin
    },
    {
      path: '/',
      name: 'WebIndex',
      component: WebIndex
    }
  ]
})
