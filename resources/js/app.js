import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter)

Vue.component('metdatalist', require('./components/metdatalist.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
