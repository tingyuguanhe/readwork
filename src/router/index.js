import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/web/layout/main'
import WebIndex from '@/views/web/index'


// 学生页面
import StudentLogin from '@/views/student/login'
import StudentLoginAuthentication from '@/views/student/login_authentication'
import StudentLoginConfirm from '@/views/student/login_confirm'
import StudentIndex from '@/views/student/index'
import StudentArticle from '@/views/student/article'
import StudentVocabulary from '@/views/student/vocabulary'
import StudentQuestions from '@/views/student/questions'



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
          meta:{
            title:'学生登录'
          }
        },
        {
          path: 'login_authentication',
          name: 'studentLoginAuthentication',
          component: StudentLoginAuthentication,
          meta:{
            title:'学生登录'
          }
        },
        {
          path: 'login_confirm/:name',
          name: 'studentLoginConfirm',
          component: StudentLoginConfirm,
          meta:{
            title:'学生登录'
          }
        },
        {
          path: 'index',
          name: 'studentIndex',
          component: StudentIndex,
          meta:{
            title:'学生'
          }
        },
        {
          path: 'article/:id/:type',
          name: 'articleStudent',
          component: StudentArticle,
          meta:{
            title:'文章'
          }
        },
        {
          path: 'vocabulary/:id/:type',
          name: 'vocabularyStudent',
          component: StudentVocabulary,
          meta:{
            title:'词汇'
          }
        },
        {
          path: 'questions/:id/:type',
          name: 'questionsStudent',
          component: StudentQuestions,
          meta:{
            title:'问题'
          }
        }
        
      ]
    }

    

    
  ]
})


export default router