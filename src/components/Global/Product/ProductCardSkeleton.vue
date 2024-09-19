<script lang="ts" setup></script>

<template>
  <div class="product-skeleton flex flex-col gap-4 w-full">
    <div
      class="product-skeleton__image d-skeleton w-full rounded-2xl bg-base-200 bg-opacity-80"
    ></div>
    <div
      class="product-skeleton__title d-skeleton h-4 w-1/2 rounded-2xl bg-base-200 bg-opacity-80"
    ></div>
    <div
      class="product-skeleton__text d-skeleton h-4 w-full rounded-2xl bg-base-200 bg-opacity-80"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.product-skeleton__image {
  height: 0;
  padding-top: 133.3%; // aspect-ratio : 3/4
}
</style>
