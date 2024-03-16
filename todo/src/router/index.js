import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import todovListView from '../views/todovListView.vue'
import randomView from '../views/randomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todolist',
      name: 'todolist',
      component : todovListView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
    {
      path: '/random',
      name: 'random',
      component : randomView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    }
  ]
})

export default router
