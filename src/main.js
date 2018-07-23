// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'styles/reset.css'  //重置css样式
import 'styles/border.css'  //解决移动端1像素问题
import 'styles/iconfont.css' //图标
import fastClick from 'fastclick'  //解决点击延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播图插件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
