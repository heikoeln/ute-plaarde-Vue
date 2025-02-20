import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import BerMich from './views/ber-mich'
import Coaching from './views/coaching'
import Impressum from './views/impressum'
import Kontakt from './views/kontakt'
import Datenschutz from './views/datenschutz'
import Kurse from './views/kurse'
import Workshops from './views/workshops'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'ber-mich',
      path: '/ueber-mich',
      component: BerMich,
    },
    {
      name: 'Coaching',
      path: '/coaching',
      component: Coaching,
    },
    {
      name: 'Impressum',
      path: '/impressum',
      component: Impressum,
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      component: Kontakt,
    },
    {
      name: 'Datenschutz',
      path: '/datenschutz',
      component: Datenschutz,
    },
    {
      name: 'Kurse',
      path: '/kurse',
      component: Kurse,
    },
    {
      name: 'Workshops',
      path: '/workshops',
      component: Workshops,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
