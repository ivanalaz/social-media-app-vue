import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewsFeed from '../views/NewsFeed.vue'
import LoginForm from '../components/LoginForm'
import Friends from '../components/Friends'
import Profile from '../components/Profile'
import User from '../components/User'

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
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/news',
        name: 'NewsFeed',
        component: NewsFeed,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/friends',
        name: 'Friends',
        component: Friends
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        props: true
      },
      {
        path: '/user/:userId',
        name: 'User',
        component: User,
        props: true
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})
/*
// Meta Handling
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/',
       // params: { nextUrl: to.fullPath }
      })
    } else {
      next({ name: 'NewsFeed' })
    }
  } else {
    next()
  }
})
*/
export default router
