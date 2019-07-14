import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/pages/Home').default
    },
    {
      path: '/todo-list',
      name: 'Home',
      component: require('@/pages/TodoList').default
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: require('@/pages/Analysis').default
    },
    {
      path: '/sounds',
      name: 'Home',
      component: require('@/pages/Sounds').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
