import calendar from './components/calendar'
import metdatalist from './components/metdatalist'
import d3 from './components/d3'
import home from './components/home'

export const routes = [
  { path: '/calendar', component: calendar, name: 'calendar' },
  { path: '/metdatalist', component: metdatalist, name: 'metdatalist' },
  { path: '/d3', component: d3, name: 'd3' },
  { path: '/', component: home, name: 'home' }
]
