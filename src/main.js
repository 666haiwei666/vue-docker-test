import Vue from 'vue'
import App from './App.vue'
import { installElementUI, installCustomComponet, installDirectives } from 'plugins'
import createRouter from './router/index'
import store from './store'
import './assets/svg'
installElementUI(Vue)
installCustomComponet(Vue)
installDirectives(Vue)
Vue.use(VueLazyload) // eslint-disable-line

const router = createRouter()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
