import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import ItemPage from '@/components/ItemPage'
import Page404 from '@/components/Page404'
import store from '@/store/store'

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
            props: true,
            beforeEnter: (to, from, next) => {
                if (store.state.list.find(item => (item.id === to.params.itemId))) {
                    next()
                } else {
                    next({ name: '404' })
                }

            }
        },
        {
            name: '404',
            path: '/404',
            component: Page404
        },
        {
            path: '*',
            redirect: '404'
        }
    ]
})
