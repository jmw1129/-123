// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/config/rem.js'
import {Icon} from 'ant-design-vue'
import VueScroller from 'vue-scroller'
import '@/style/index.scss'
import {  Switch } from 'mint-ui'
import store from '@/store/index'
Vue.component(Switch.name , Switch)
Vue.config.productionTip = false
Vue.use(VueScroller)
Vue.use(Icon)

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
