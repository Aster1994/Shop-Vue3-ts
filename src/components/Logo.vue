<script lang="ts" setup>
export interface Props {
  width?: number
  height?: number
  typo?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 75,
  height: 75,
  typo: false
})
</script>

<template>
  <div class="logo">
    <img
      v-if="typo"
      :height="auto"
      :width="props.width"
      alt="Vue logo"
      class="logo"
      src="../assets/logo-typo.png"
    />
    <img
      v-else
      :height="props.height"
      :width="props.width"
      alt="Vue logo"
      class="logo"
      src="../assets/logo.png"
    />
  </div>
</template>

<style lang="scss" scoped></style>
