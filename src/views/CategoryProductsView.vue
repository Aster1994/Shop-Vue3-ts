<template>
  <div class="top--section mt-6 px-3 md:px-16 w-full flex justify-between items-center">
    <TitleCard :title="`دسته بندی : ${route.params.name}`" />
    <BackTo />
  </div>

  <section class="main--section mt-10 px-3 md:px-16 w-full flex flex-col">
    <Loading v-if="categoryProductsLoading" class="self-center" />

    <div
      v-else-if="categoryProducts.length"
      class="new-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center"
    >
      <ProductCard
        v-for="product in categoryProducts"
        :key="product.id"
        ref="itemRefs"
        :product="product"
      />
    </div>
    <BlankPlaceHolder v-else class="col-span-4 self-center"></BlankPlaceHolder>
  </section>
</template>

<script lang="ts" setup>
import Loading from '@/components/Global/Loading.vue'
import TitleCard from '@/components/Global/TitleCard.vue'
import ProductCard from '@/components/Global/Product/ProductCard.vue'
import BackTo from '@/components/Global/BackTo.vue'
import BlankPlaceHolder from '@/components/Global/BlankPlaceHolder.vue'
import type Product from '@/types/Product'
import { useRoute } from 'vue-router'
import { ref, type Ref } from 'vue'
import { useMyFetch } from '@/config'

const route = useRoute()
let categoryProducts: Ref<Product[]> = ref([])
let categoryProductsLoading: Ref<boolean> = ref(false)

async function getCategoryProducts() {
  try {
    categoryProductsLoading.value = true
    const { data } = await useMyFetch(`products/category/${route.params.name}`).json()
    if (data.value) {
      categoryProducts.value = data.value.products
    }
  } catch (error) {
    console.log('The Error is: ', error)
  } finally {
    categoryProductsLoading.value = false
  }
}

getCategoryProducts()
</script>

<style lang="scss" scoped></style>
