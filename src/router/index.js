import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import Hello from '@/views/Hello'
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import Follow from '@/views/Follow'
import Fan from '@/views/Fan'
import Production from '@/views/Production'
import Upload from '@/views/Upload'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/home',
    redirect: '/home/detail',
    name: 'Home',
    component: Home,
    children: [{
      path: 'detail',
      name: 'Detail',
      component: Detail
    }, {
      path: 'follow',
      name: 'Follow',
      component: Follow
    }, {
      path: 'fan',
      name: 'Fan',
      component: Fan
    }, {
      path: 'production',
      name: 'Production',
      component: Production
    }]
  }, {
    path: '/upload',
    name: Upload,
    component: Upload
  }]
})

router.beforeEach((to, from, next) => {
  let isLogin = store.state.isLogin
  if (isLogin) {
    if (to.path === '/') {
      next({ path: '/home' })
    } else {
      next()
    }
  } else {
    if (to.path !== '/') {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

export default router
