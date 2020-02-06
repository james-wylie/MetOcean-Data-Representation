import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

require('./bootstrap');

// window.Vue = require('vue');

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.component('dev-metdatalist', require('./components/dev-metdatalist.vue').default)
Vue.component('dev-calendar', require('./components/dev-calendar.vue').default)
Vue.component('graphVisualisation', require('./components/graphvisualisation.vue').default)
Vue.component('home', require('./components/home.vue').default)

const app = new Vue({
  el: '#app',
  router
}
)
