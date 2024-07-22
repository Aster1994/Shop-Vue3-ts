<script lang="ts" setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/Global/MainHeader.vue'
</script>

<template>
  <MainHeader
    class="md:fixed md:top-0 md:right-0 md:left-0 w-full md:h-main-header-height mx-auto max-w-layout-max-width"
  />

  <RouterView class="main--wrapper md:pt-main-header-height" />
</template>

<style lang="scss" scoped></style>
