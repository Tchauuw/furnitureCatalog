<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const productsData = ref([
  {
    id: 0,
    name: 'Canapé jaune',
    cover: './../assets/canape-jaune.png',
    details: 'Livraison sous 2 semaines',
    price: 799
  },
  {
    id: 1,
    name: 'Chaise bois',
    cover: './../assets/chaise-bois.png',
    details: 'Livraison sous 3 jours',
    price: 299,
    discountedPrice: 99
  },
  {
    id: 2,
    name: 'Fauteuil jaune',
    cover: './../assets/fauteuil-jaune.png',
    details: 'Rupture de stock',
    price: 25
  }
])
</script>

<template>
  <main>
    <NavBar></NavBar>
    <RouterView v-slot="{ Component }">
      <component :is="Component" :products="productsData" />
    </RouterView>
  </main>
</template>
