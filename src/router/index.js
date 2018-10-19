import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/web/layout/main'
import WebIndex from '@/views/web/index'


// 学生页面
import StudentLogin from '@/views/student/login'
import StudentLoginAuthentication from '@/views/student/login_authentication'
import StudentLoginConfirm from '@/views/student/login_confirm'
import StudentIndex from '@/views/student/index'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {
          path: '/',
          name: 'WebIndex',
          component: WebIndex,
          text:'首页',
          meta:{
            title:'首页',
            navShow: true
          }
        },
        {
          path: '/login',
          name: 'webIndex',
          component: WebIndex,
          text:'登录',
          meta:{
            title:'登录',
            navShow: true
          }
        },
        
      ]
    },

    {
      path: '/student',
      name: 'layout',
      component: Layout,
      children:[
        {
          path: 'login',
          name: 'studentLogin',
          component: StudentLogin,
          text:'学生登录',
          meta:{
            title:'学生登录'
          }
        },
        {
          path: 'login_authentication',
          name: 'studentLoginAuthentication',
          component: StudentLoginAuthentication,
          text:'学生登录',
          meta:{
            title:'学生登录'
          }
        },
        {
          path: 'login_confirm/:name',
          name: 'studentLoginConfirm',
          component: StudentLoginConfirm,
          text:'学生登录',
          meta:{
            title:'学生登录'
          }
        },
        {
          path: 'index',
          name: 'studentIndex',
          component: StudentIndex,
          text:'学生',
          meta:{
            title:'学生'
          }
        }
      ]
    }

    

    
  ]
})


export default router