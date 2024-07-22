<template>
  <div class="category__product w-full cursor-pointer">
    <img :alt="props.category.name" :src="props.category.image" class="w-full h-auto rounded-2xl" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  category: object
}>()
</script>

<style lang="scss" scoped></style>
