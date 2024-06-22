<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HomeHeader from '@/components/Home/HomeHeader.vue'
</script>

<template>
  <HomeHeader class="fixed top-0 right-0 left-0 w-full h-main-header-height" />

  <RouterView class="main--wrapper mt-main-header-height" />
</template>

<style lang="scss" scoped></style>
