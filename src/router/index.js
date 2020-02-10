import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve=>require(["../components/Home"],resolve)
    },
    {
      path: '/DingDong',
      name: 'DingDong',
      component: resolve=>require(["../components/DingDong"],resolve)
    }
  ]
})
