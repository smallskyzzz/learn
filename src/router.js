import Vue from 'vue'
import VueRouter from 'vue-router'

import slotExampleP from "./components/slotExample/slotExampleP";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/slotExample',
      component: slotExampleP
    }
  ]
})
