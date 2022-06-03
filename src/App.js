import Vue from "vue/dist/vue";
import ElementUI from 'element-ui';
import VueLazyload from "vue-lazyload";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import router from './router'
import store from './store'
import Plugin from "./utils/plugin";

import './style/global.css';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(VueLazyload)
Vue.use(Plugin)



export default new Vue({
  name: 'App',

  mounted(){
    console.log(this.$bus)
  },

  template: `
  <div>
    <Header />
  </div>
  `,

  components: {
    Header,
    Main,
    Footer,
    Register,
    Login
  },

  router,
  store
})

