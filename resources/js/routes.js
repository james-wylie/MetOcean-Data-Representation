import calendar from './components/calendar'
import metdatalist from './components/metdatalist'

export const routes = [
  { path: '/calendar', component: calendar, name: 'calendar' },
  { path: '/metdatalist', component: metdatalist, name: 'metdatalist' },
]