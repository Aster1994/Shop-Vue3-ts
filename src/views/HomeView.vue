<script lang="ts" setup>
import ProductsCategory from '@/components/Home/ProductsCategory/ProductsCategory.vue'
import TitleCard from '@/components/Global/TitleCard.vue'
import ProductCard from '@/components/Global/Product/ProductCard.vue'
import Loading from '@/components/Global/Loading.vue'
import { productStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { productsLoading } = storeToRefs(productStore())

const { getProducts } = productStore()
getProducts()

const { newestProducts } = storeToRefs(productStore())
const itemRefs = ref([])
</script>

<template>
  <main class="w-full">
    <ProductsCategory class="mt-6 2xl:rounded-2xl" />
    <TitleCard class="mt-6 px-8" title="جدید ترین ها" />

    <section class="mt-6 px-8 w-full flex flex-col items-center">
      <Loading v-if="productsLoading" />

      <div
        class="new-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center"
      >
        <ProductCard
          v-for="product in newestProducts"
          :key="product.id"
          ref="itemRefs"
          :product="product"
          class=""
        />
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped></style>
