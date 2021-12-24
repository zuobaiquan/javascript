import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
Vue.use(Toast)

new Vue({
  render: h => h(App),
}).$mount('#app')
