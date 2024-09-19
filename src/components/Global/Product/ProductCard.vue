<template>
  <RouterLink :to="`/product/${product.title}`" class="product--card rounded-2xl h-full">
    <div class="product--card__image relative rounded-2xl bg-base-200 bg-opacity-80 z-0">
      <img :alt="product.title" :src="product.images[0]" class="rounded-2xl object-cover z-[1]" />
    </div>
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
  height: 0;
  padding-top: 133.3%; // aspect-ratio : 3/4

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
