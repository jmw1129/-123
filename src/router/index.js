import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


// 路由懒加载  按需加载
// 一级路由
// const Foo = () => import('./Foo.vue')
const Shou = () => import('@/page/Shou')
const Ding = () => import('@/page/Ding')
const Sou = () => import('@/page/Sou')
const Login = () => import('@/page/login/Login')
const Reset = () => import('@/page/resetting/Reset')

const cs = () => import('@/page/cs/cs')

// 二级路由
const Take = () => import('@/page/footer/Take')
const Order = () => import('@/page/footer/Order')
const Search = () => import('@/page/footer/Search')
const My = () => import('@/page/footer/My')

const Account = () => import('@/page/user/Account')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Ding'
    },
    {
      path: '/Account',
      component: Account
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/cs',
      component: cs
    },
    {
      path:'/Reset',
      component: Reset
    },
    {
      path: '/Shou',
      component: Shou,
      children: [
        {
          path: '/Shou/Take',
          component: Take
        },
        {
          path: '/Shou/Order',
          component: Order
        },
        {
          path: '/Shou/Search',
          component: Search
        },
        {
          path: '/Shou/My',
          component: My,
        }
      ]
    },
    {
      path: '/Ding',
      component: Ding
    },
    {
      path: '/Sou',
      component: Sou
    }
    
  ]
})
