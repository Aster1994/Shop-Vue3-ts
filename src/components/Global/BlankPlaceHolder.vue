<script lang="ts" setup></script>

<template>
  <p
    class="blank-placeholder text-3xl text-stone-600 text-opacity-80 w-fit font-bold relative after:bg-error after:opacity-80"
  >
    نتیجه ای یافت نشد.
  </p>
</template>

<style lang="scss" scoped>
.blank-placeholder {
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    right: -1rem;
    width: 90%;
    height: 1.5rem;
    border-radius: 50%;
    transform: rotate(-5deg);
    z-index: -1;
  }
}
</style>
