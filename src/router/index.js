import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/'
import CardPage from '@/pages/card'
import CardPageDetail from '@/pages/cardDetail'
import AddUserPage from '@/pages/addUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/card',
      name: 'CardPage',
      component: CardPage
    },
    {
      path: '/card/:id',
      name: 'CardPageDetail',
      component: CardPageDetail
    },
    {
      path: '/user-add',
      name: 'AddUserPage',
      component: AddUserPage
    }
  ]
})
