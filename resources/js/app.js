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

Vue.component('metdatalist', require('./components/metdatalist.vue').default)
Vue.component('calendar', require('./components/calendar.vue').default)
Vue.component('graphVisualisation', require('./components/graphvisualisation.vue').default)
Vue.component('home', require('./components/home.vue').default)
Vue.component('changedatabuttons', require('./components/ChangeDataButtons.vue').default)

const app = new Vue({
  el: '#app',
  router
}
)
