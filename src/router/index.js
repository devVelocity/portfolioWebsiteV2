import { createRouter, createWebHashHistory } from 'vue-router'
import mainpage from '../views/main.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: mainpage
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (!savedPosition){
      if (to.hash) {
        // return {selector: to.hash}
        //Or for Vue 3:
        return {el: to.hash}
      } else {
          return { x: 0, y: 0 }
      }
    }else{
      return{y:0}
    }
  },
})

export default router
