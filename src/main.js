import Vue from 'vue'
import App from './App'
import Navbar from './components/navbar'
import Swiper from './components/swiper'

import './styles/reset.less'
import './styles/global.less'


Vue.config.productionTip = false

Vue.component('Navbar', Navbar)
Vue.component('Swiper', Swiper)


new Vue({
  render: h => h(App)

}).$mount('#app')
