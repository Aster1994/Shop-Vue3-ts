<template>
  <RouterLink :to="`/product/${product.title}`" class="product--card rounded-2xl h-full">
    <img :alt="product.title" :src="product.images[0]" class="product--card__image rounded-2xl" />
    <div class="px-1 py-4 flex items-center justify-between">
      <div>
        <h2 class="product--card__title text-lg font-semibold ml-2">
          {{ product.title }}
        </h2>
        <span class="product--card__price mt-2 text-md font-medium text-accent">
          {{ product.price }} {{ currency }}
        </span>
      </div>
      <font-awesome-icon class="size-5 opacity-60" icon="fa-solid fa-arrow-left-long" />
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type Product from '@/types/Product'

const props = defineProps<{
  product: Product
}>()
const currency = import.meta.env.VITE_CURRENCY
const product = reactive(props.product)
</script>

<style lang="scss" scoped>
.product--card__image {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>
