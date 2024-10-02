import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import HomePage from './pages/HomePage.vue'
import ProductPage from './pages/ProductPage.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
  ]
})
