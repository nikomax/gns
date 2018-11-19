import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import ItemPage from '@/components/ItemPage'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      name: 'items',
      path: '/items/:itemId',
      component: ItemPage,
      props: true
    },
    {
      path: '*',
      component: Page404
    },
  ]
})
