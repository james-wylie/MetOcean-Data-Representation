import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.component('metdatalist', require('./components/metdatalist.vue').default)
Vue.component('calendar', require('./components/calendar.vue').default)
Vue.component('home', require('./components/home.vue').default)

const app = new Vue({
  el: '#app',
  router,
  methods: {
    fetchMetOceanData () {
      axios.get('get-metocean-data')
        .then(res => {
          let newMap = res.data.map(el => {
            let day_hour = el.Time.split(' ')
            el.day = day_hour[0]
            el.hour = day_hour[1]
            return el
          })
          this.metData = res.data
        })                    
        .catch(err => {
          console.log(err)
        })
    }
}
})
