<template>
  <div class="title-card p-8">
    <h4
      class="title-card__title relative text-2xl font-bold max-w-fit after:bg-accent after:opacity-80"
    >
      {{ props.title }}
    </h4>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
.title-card {
  &__title {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -0.5rem;
      width: 6.25rem;
      height: 1.25rem;
      border-radius: 50%;
      transform: rotate(-5deg);
      z-index: -1;
    }
  }
}
</style>
