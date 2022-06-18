import Vue from 'vue'
import App from './App'
import Navbar from './components/navbar'

import './styles/reset.less'


Vue.config.productionTip = false

Vue.component('Navbar', Navbar)

new Vue({
  render: h => h(App)

}).$mount('#app')
