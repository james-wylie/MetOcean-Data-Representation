import calendar from './components/calendar'
import metdatalist from './components/metdatalist'
import graphVisualisation from './components/graphvisualisation'
import home from './components/home'

export const routes = [
  { path: '/calendar', component: calendar, name: 'calendar' },
  { path: '/metdatalist', component: metdatalist, name: 'metdatalist' },
  { path: '/graphvisualisation', component: graphVisualisation, name: 'graphVisualisation' },
  { path: '/', component: home, name: 'home' }
]
