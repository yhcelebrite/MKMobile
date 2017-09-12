import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import UserPosts from '@/components/UserPosts'
import UserProfile from '@/components/UserProfile'
import Cart from '@/components/Cart'
import Address from '@/components/Address'
import Index from '@/components/Index'
import Login from '@/components/Login'
import config from '@/assets/config/config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/user/:id',
      name:"User",
      component:User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path:'/user/:username/post/:post_id',
      name:"User",
      component:User
    }
  ]
})
