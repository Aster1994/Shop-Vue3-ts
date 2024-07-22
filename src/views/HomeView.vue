<script lang="ts" setup>
import ProductsCategory from '@/components/Home/ProductsCategory/ProductsCategory.vue'
import TitleCard from '@/components/Global/TitleCard.vue'
</script>

<template>
  <main class="w-full">
    <ProductsCategory class="mt-6 2xl:rounded-2xl" />
    <TitleCard class="mt-6 px-8" title="جدید ترین ها" />

    <div class="mt-6 h-[200px] bg-white rounded-2xl px-8">This is a Home Page.</div>
  </main>
</template>
<style lang="scss" scoped></style>
