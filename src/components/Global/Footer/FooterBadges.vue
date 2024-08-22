<template>
  <div class="footer-badges grid justify-between grid-cols-2 gap-4 lg:gap-6">
    <div
      v-for="badge in badges"
      :key="badge.id"
      :class="{ 'last:col-start-1 last:col-span-2': isOdd }"
      class="badge-box min-w-20 min-h-20 rounded-2xl"
    >
      <a :href="badge.link">
        <div class="badge-icon"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const badges = ref([
  {
    id: 1,
    icon: '',
    link: ''
  },
  {
    id: 2,
    icon: '',
    link: ''
  },
  {
    id: 3,
    icon: '',
    link: ''
  },
  {
    id: 4,
    icon: '',
    link: ''
  }
])
const isOdd = computed(() => {
  return badges.value.length % 2 !== 0
})
</script>

<style lang="scss" scoped>
.footer-badges {
  .badge-box {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
}
</style>
