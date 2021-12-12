import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page',
    component: Page
  }
]

const router = new VueRouter({
  routes
})

export default router
