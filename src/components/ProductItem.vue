<script setup>
import { computed } from 'vue';
import useCurrency from '../composables/useCurrency.js'

const props = defineProps(
    {
        product: {
            type: Object
        }
    }
);

const imgPath = computed(() => new URL(props.product.cover, import.meta.url).href);

const { format } = useCurrency({currency: '€'});

const euroPrice = format(props.product.price, '€');
const euroPriceDiscounted = format(props.product.discountedPrice, '€');
</script>
<template>
    <div class="card">
        <img :src="imgPath" :alt="props.product.name" />
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.details }}</p>
          <p :class="{
            'line-through': props.product.discountedPrice,
            'text-4xl': !props.product_discountedPrice
          }">{{ euroPrice }}</p>
          <p v-if="props.product.discountedPrice">{{ euroPriceDiscounted }}</p>
          <div class="card-actions">
            <button class="btn btn-primary" :disabled="!props.product.price">Commander</button>
          </div>
        </div>
      </div>
</template>