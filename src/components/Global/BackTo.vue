<script lang="ts" setup>
import router from '@/router'

function onReturn() {
  router.back()
}
</script>

<template>
  <div class="back-to relative after:bg-accent cursor-pointer" @click="onReturn">
    <font-awesome-icon class="text-4xl font-bold opacity-80" icon="fa-solid fa-angle-left " />
  </div>
</template>

<style lang="scss" scoped>
.back-to {
  &:after {
    content: '';
    position: absolute;
    bottom: 0.85rem;
    left: 1rem;
    width: 3rem;
    height: 0.7rem;
    border-radius: 50%;
  }
}
</style>
