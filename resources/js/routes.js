import calendar from './components/dev-calendar'
import metdatalist from './components/dev-metdatalist'
import graphVisualisation from './components/graphvisualisation'
import home from './components/home'

export const routes = [
  { path: '/dev-calendar', component: calendar, name: 'calendar' },
  { path: '/dev-metdatalist', component: metdatalist, name: 'metdatalist' },
  { path: '/graphvisualisation', component: graphVisualisation, name: 'graphVisualisation' },
  { path: '/', component: home, name: 'home' }
]
