<script setup>
  import { ref } from 'vue';
  import ProductItem from './components/ProductItem.vue';
  const data = ref(
    [
      {
        id: 0,
        name: "Canapé jaune",
        details: "Livraison sous 2 semaines",
        discountedPrice: "",
        price: 1350,
        cover: "./../assets/canape-jaune.png",
      },
      {
        id: 1,
        name: "Chaise bois",
        details: "Livraison sous 3 jours",
        discountedPrice: 150,
        price: 300,
        cover: "./../assets/chaise-bois.png",
      },
      {
        id: 2,
        name: "Fauteuil jaune",
        details: "Rupture de stock",
        discountedPrice: "",
        price: 500,
        cover: "./../assets/fauteuil-jaune.png",
      }
    ]
  )
</script>

<template>
  <main>
    <section class="list" >
      <ProductItem v-for="item in data" :key="item" :product="item"/>
    </section>
  </main>
</template>
