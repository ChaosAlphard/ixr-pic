import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './tsalias/typeDefine'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
