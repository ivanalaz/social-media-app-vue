import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewsFeed from '../views/NewsFeed.vue'
import LoginForm from '../components/LoginForm'
import Friends from '../components/Friends'
import UserProfile from '../components/UserProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Home,
    children: [
      {
        path: '/news',
        name: 'NewsFeed',
        component: NewsFeed
      },
      {
        path: '/friends',
        name: 'Friends',
        component: Friends
      },
      {
        path: '/profile',
        name: 'Profile',
        component: UserProfile
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
