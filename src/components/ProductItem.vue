<script setup>
import { useCurrency } from '@/composables/useCurrency'
import { computed } from 'vue'

const { format, currency } = useCurrency({ currency: '€' })

const props = defineProps({
  product: {
    type: Object
  }
})

const imgPath = computed(() => new URL(props.product.cover, import.meta.url).href)

const price = format(props.product.price)
const discountedPrice = format(props.product.discountedPrice)
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
        {{ price }}
      </p>
      <p v-if="product.discountedPrice">{{ discountedPrice }}</p>
      <div class="card-actions" :disabled="!props.product.price">
        <!-- <button class="btn btn-primary">Commander</button> -->
        <RouterLink :to="{ path: `/product/${props.product.price}` }" class="btn btn-primary"
          >Commander</RouterLink
        >
      </div>
    </div>
  </div>
</template>
