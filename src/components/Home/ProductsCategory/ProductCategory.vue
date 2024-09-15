<template>
  <RouterLink
    :to="`category/${props.category.name}`"
    class="category__product w-full cursor-pointer"
  >
    <img :alt="props.category.name" :src="props.category.image" class="w-full h-auto rounded-2xl" />
  </RouterLink>
</template>

<script lang="ts" setup>
import type ProductCategory from '@/types/ProductCategory'

const props = defineProps<{
  category: ProductCategory
}>()
</script>

<style lang="scss" scoped></style>
