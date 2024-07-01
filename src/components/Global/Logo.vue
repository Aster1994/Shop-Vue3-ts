<script lang="ts" setup>
import variables from '@/assets/variables.js'

export interface Props {
  width?: number
  height?: number
  typo?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: variables.sizes['logo-width'],
  height: variables.sizes['logo-height'],
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
      src="../../assets/logo-typo.png"
    />
    <img
      v-else
      :height="props.height"
      :width="props.width"
      alt="Vue logo"
      class="logo"
      src="../../assets/logo.png"
    />
  </div>
</template>

<style lang="scss" scoped></style>
