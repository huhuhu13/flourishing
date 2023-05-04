// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from "axios"
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './lang/index'
import  container  from '@/components/container'


Vue.use(ElementUI);
Vue.component('container', container)

Vue.config.productionTip = false
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  i18n,
  components: { App },
  template: '<App/>'
})
