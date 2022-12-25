import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import {getBaseCategoryList} from "@/api";
// getBaseCategoryList().then(r => {});
import TypeNav from '@/components/TypeNav'
import Carouse from '@/components/Carouse'
import Pagination from '@/components/Pagination'
import 'swiper/css/swiper.min.css'
import '@/mock/mockServer'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carouse.name,Carouse)
Vue.component(Pagination.name,Pagination)

new Vue({
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this
    },
  router,
  store
}).$mount('#app')
