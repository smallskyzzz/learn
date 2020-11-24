import Vue from 'vue'
import VueRouter from 'vue-router'

import slotExample from "./components/slotExample";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/slotExample',
      component: slotExample
    }
  ]
})
