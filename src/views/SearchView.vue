<script lang="ts" setup>
import ProductCard from '@/components/Global/Product/ProductCard.vue'
import TitleCard from '@/components/Global/TitleCard.vue'
import Loading from '@/components/Global/Loading.vue'
import { onMounted, ref, type Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useMyFetch } from '@/config'
import type Product from '@/types/Product'
import debounce from 'lodash.debounce'

const route = useRoute()

let loading: Ref<boolean> = ref(false)
let products: Ref<Product[]> = ref([] as Product[])

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
    <TitleCard :title="` نتایج جستجو برای ${route.query.query}`" class="mt-6 px-8" />
    <Loading v-if="loading" class="self-center mt-6" />
    <div
      v-else
      class="mt-6 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center"
    >
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
