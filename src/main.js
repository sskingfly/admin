import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './styles.scss'
import * as api from './api'
import storage from './utils/storage'
import router from './router'
import store from './store'

Vue.prototype.$http = api
Vue.prototype.$storage = storage

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
