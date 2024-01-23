import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import HomePage from './pages/HomePage.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '',
      alias: '/home',
      name: 'home',
      component: HomePage
    }
  ]
})
