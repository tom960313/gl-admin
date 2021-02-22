import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/public.scss' //公共样式
import VueDND from 'awe-dnd'
import store from './store';

Vue.use(Element)
Vue.use(VueDND)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
