<script lang="ts" setup>
import variables from '@/assets/config/variables'

export interface Props {
  width?: number | string
  height?: number | string
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
      :width="props.width"
      alt="Vue logo"
      class="logo"
      height="auto"
      src="../../assets/images/logo/logo-typo.png"
    />
    <img
      v-else
      :height="props.height"
      :width="props.width"
      alt="Vue logo"
      class="logo"
      src="../../assets/images/logo/logo.png"
    />
  </div>
</template>

<style lang="scss" scoped></style>
