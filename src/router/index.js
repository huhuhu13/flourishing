import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/User/Login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
