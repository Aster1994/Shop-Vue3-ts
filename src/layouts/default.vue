<template>
  <MainHeader
    class="z-[1] md:fixed md:top-0 md:right-0 md:left-0 w-full md:h-main-header-height mx-auto max-w-layout-max-width"
  />
  <main class="w-full md:pt-main-header-height min-h-[60vh]">
    <slot />
  </main>

  <Footer class="mt-16" />
</template>

<script lang="ts" setup>
import MainHeader from '@/components/Global/MainHeader.vue'
import setInitial from '@/config/setInitial'
import Footer from '@/components/Global/Footer/Footer.vue'

setInitial()
</script>

<style lang="scss" scoped></style>
