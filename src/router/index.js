import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 路由懒加载  按需加载
// 一级路由
// const Foo = () => import('./Foo.vue')
const Shou = () => import('@/page/Shou')
const Ding = () => import('@/page/Ding')
const Sou = () => import('@/page/Sou')
const Login = () => import('@/page/login/Login')
const Reset = () => import('@/page/resetting/Reset')

const cs = () => import('@/page/cs/cs')
const Tiu = () => import('@/page/login/tiu')
const Site = () => import('@/page/login/site')
const Add = () => import('@/page/login/add')
const Sea = () => import('@/page/login/search')
const user = () => import('@/page/login/bjusername')
const Shipping = () => import('@/page/shipping/shipping')
const Shipping1 = () => import('@/page/shipping/shipp')
const Shipping2 = () => import('@/page/shipping/shipp2')
// 二级路由
const Take = () => import('@/page/footer/Take')
const Order = () => import('@/page/footer/Order')
const Search = () => import('@/page/footer/Search')
const My = () => import('@/page/footer/My')
const My2 = () => import('@/page/footer/My2')
const Account = () => import('@/page/user/Account')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Ding'
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
      path: '/Reset',
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
          redirect:'/Shou/My/my',
          children: [
            {
              path: 'tiu',
             component: Tiu
          },
          {
            path: 'my',
           component: My2
        },
        {
           path: 'site',
           component: Site
        },
        {
          path: 'add',
          component: Add
        },
        {
          path :'sea',
          component:Sea
        },{
          path :"user",
          component:user
        }

         ]
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
    },
    {
      path: '/shipping',
      component: Shipping,
      
    },
    {
            path: '/shipp',
            component:Shipping1,
           
        },
    {
      path: '/ship2',
      component: Shipping2
    },
    {
      path: "/shipp",
      component: Shipping1
    }
      
    
  ]
})
