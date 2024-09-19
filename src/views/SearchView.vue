<script lang="ts" setup>
import ProductCard from '@/components/Global/Product/ProductCard.vue'
import TitleCard from '@/components/Global/TitleCard.vue'
import ProductCardSkeleton from '@/components/Global/Product/ProductCardSkeleton.vue'
import BackTo from '@/components/Global/BackTo.vue'
import { computed, onMounted, ref, type Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useMyFetch } from '@/config'
import debounce from 'lodash.debounce'
import type Product from '@/types/Product'
import { breakpoints } from '@/assets/config/variables'
import BlankPlaceHolder from '@/components/Global/BlankPlaceHolder.vue'

const route = useRoute()

let loading: Ref<boolean> = ref(true)
let products: Ref<Product[]> = ref([] as Product[])
const skeletonsNumber = computed(() => (breakpoints.isLg ? 4 : breakpoints.sm ? 2 : 1))

async function onSearch(): Promise<any> {
  try {
    loading.value = true
    const { data } = await useMyFetch(`products/search?q=${route.query.query}`, {}).json()
    if (data.value) {
      products.value = data.value.products
    }
    loading.value = false
  } catch (error) {
    console.log('The Error is: ', error)
  }
}

watch(
  route,
  debounce(() => {
    if (route.query.query) onSearch()
    else router.push('/')
  }, 500)
)

onMounted(
  debounce(() => {
    if (route.query.query) onSearch()
    else router.push('/')
  }, 500)
)
</script>

<template>
  <div class="flex flex-col">
    <div class="top--section mt-6 px-3 md:px-16 w-full flex justify-between items-center">
      <TitleCard :title="` نتایج جستجو برای ${route.query.query}`" class="mt-6 px-8" />
      <BackTo @back="router.push('/')" />
    </div>
    <div
      v-if="loading"
      class="mt-6 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center w-full"
    >
      <ProductCardSkeleton v-for="skeleton in skeletonsNumber" :key="skeleton" />
    </div>
    <div
      v-else-if="products.length"
      class="mt-6 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center"
    >
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <BlankPlaceHolder v-else-if="!loading" class="col-span-4 self-center"></BlankPlaceHolder>
  </div>
</template>

<style lang="scss" scoped></style>
