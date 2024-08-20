<script lang="ts" setup>
import ProductsCategory from '@/components/Home/ProductsCategory/ProductsCategory.vue'
import TitleCard from '@/components/Global/TitleCard.vue'
import ProductCard from '@/components/Global/Product/ProductCard.vue'
import Loading from '@/components/Global/Loading.vue'
import BannerCard from '@/components/Home/Banner/BannerCard.vue'
import banner from '@/assets/config/bannerData'
import { productStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { productsLoading } = storeToRefs(productStore())

const { getProducts } = productStore()
getProducts()

const { newestProducts, mostWantedProducts } = storeToRefs(productStore())
const itemRefs = ref([])
</script>

<template>
  <BannerCard :banner="banner" class="mt-4 md:mt-0 px-3 md:px-16" />

  <ProductsCategory class="mt-10 2xl:px-16" />

  <TitleCard class="mt-6 px-3 md:px-16" title="جدید ترین ها" />
  <section class="mt-6 px-3 md:px-16 w-full flex flex-col items-center">
    <Loading v-if="productsLoading" />

    <div
      class="new-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center"
    >
      <ProductCard
        v-for="product in newestProducts"
        :key="product.id"
        ref="itemRefs"
        :product="product"
      />
    </div>
  </section>

  <TitleCard class="mt-6 px-3 md:px-16" title="پرفروش ترین ها" />
  <section class="mt-6 px-3 md:px-16 w-full flex flex-col items-center">
    <Loading v-if="productsLoading" />

    <div
      class="new-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center"
    >
      <ProductCard
        v-for="product in mostWantedProducts"
        :key="product.id"
        ref="itemRefs"
        :product="product"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner-card {
  @media (min-width: 768px) {
    min-height: calc(100vh - #{$main-header-height} - 2rem);
    max-height: calc(100vh - #{$main-header-height} - 2rem);
  }
}
</style>
