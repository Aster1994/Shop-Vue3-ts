<template>
  <div
    class="category__products p-4 flex gap-4 flex-wrap justify-evenly items-center w-full bg-secondary"
  >
    <Loading v-if="loading" />

    <ProductCategoryCard
      v-for="category in productCategories"
      :key="category.slug"
      ref="itemRefs"
      :category="category"
      class="max-w-20"
    />
  </div>
</template>

<script lang="ts" setup>
import Loading from '@/components/Global/Loading.vue'
import ProductCategoryCard from '@/components/Home/ProductsCategory/ProductCategory.vue'
import { onMounted, ref, type Ref } from 'vue'
import type ProductCategory from '@/types/ProductCategory'
import { useMyFetch } from '@/config'

let productCategories: Ref<ProductCategory[]> = ref([])
const itemRefs = ref([])

let loading: Ref<boolean> = ref(false)

async function getCategories(): Promise<any> {
  try {
    loading.value = true
    const { data } = await useMyFetch('products/categories', {}).json()
    if (data.value) {
      data.value.splice(7)
      productCategories.value = data.value.map((item: object) => {
        return { ...item, image: 'src/assets/images/category-test.png' }
      })
    }
    loading.value = false
  } catch (error) {
    console.log('The Error is: ', error)
  }
}

onMounted(() => {
  getCategories()
})
</script>

<style lang="scss" scoped></style>
