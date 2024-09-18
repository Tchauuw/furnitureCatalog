<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object
  }
})

const imgPath = computed(() => new URL(props.product.cover, import.meta.url).href)

const addDevise = computed((arg) => `${arg} €`)
</script>
<template>
  <div class="card">
    <img :src="imgPath" :alt="props.product.name" />
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>{{ product.details }}</p>
      <p
        :class="{
          'line-through': props.product.discountedPrice,
          'text-4xl': !props.product.discountedPrice
        }"
      >
        {{ addDevise(product.price) }}
      </p>
      <p v-if="product.discountedPrice">
        {{ addDevise(product.discountedPrice) }}
      </p>
      <div class="card-actions" :disabled="!props.product.price">
        <button class="btn btn-primary">Commander</button>
      </div>
    </div>
  </div>
</template>
