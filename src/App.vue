<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const productsData = ref([
  {
    name: 'Canapé jaune',
    cover: './../assets/canape-jaune.png',
    details: 'Livraison sous 2 semaines',
    price: 799
  },
  {
    name: 'Chaise bois',
    cover: './../assets/chaise-bois.png',
    details: 'Livraison sous 3 jours',
    price: 299,
    discountedPrice: 99
  },
  {
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
