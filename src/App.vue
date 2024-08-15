<script lang="ts" setup>
import { RouterView } from 'vue-router'
import layouts from '@/layouts/layouts'
import router from '@/router'
import { type ShallowRef, shallowRef } from 'vue'

let layout: ShallowRef<string> = shallowRef('div')
router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || 'div'
})
// provide('app:layout', layout)
</script>

<template>
  <component :is="layout">
    <RouterView class="main--wrapper" />
  </component>
</template>

<style lang="scss" scoped></style>
