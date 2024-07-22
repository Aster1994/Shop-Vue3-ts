<template>
  <div class="category__products p-4 flex gap-4 justify-evenly items-center w-full bg-secondary">
    <ProductCategoryCard
      v-for="category in productCategories"
      :key="category.slug"
      :category="category"
      class="max-w-20"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import ProductCategoryCard from '@/components/Home/ProductsCategory/ProductCategory.vue'
import type ProductCategory from '@/types/ProductCategory'
import { useMyFetch } from '@/config'

let productCategories: Ref<ProductCategory[]> = ref([])
let loading: Ref<boolean> = ref(false)

async function getCategories(): Promise<any> {
  try {
    loading.value = true
    const { data } = await useMyFetch('products/categories', {}).json()
    if (data.value) {
      data.value.splice(7)
      productCategories.value = data.value.map((item: object) => {
        return { ...item, image: 'src/assets/category-test.png' }
      })
    }
  } catch (error) {
    loading.value = false
    console.log('The Error is: ', error)
  }
}

onMounted(() => {
  getCategories()
})
</script>

<style lang="scss" scoped></style>
