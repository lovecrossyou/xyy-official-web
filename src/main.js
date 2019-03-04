// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//vue-router
import store from './store/store.js'//vuex
import BabelPolyFill from 'babel-polyfill'//兼容ie
import VueAwesomeSwiper from 'vue-awesome-swiper'//轮播图
import 'swiper/dist/css/swiper.css'//轮播图样式
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.config.productionTip = false

Vue.use(BabelPolyFill)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
