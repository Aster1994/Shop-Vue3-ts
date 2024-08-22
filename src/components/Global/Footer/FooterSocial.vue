<template>
  <div class="social h-full flex sm:flex-col justify-between">
    <a
      v-for="(item, index) in social"
      :key="index"
      :href="item.link"
      class="ms-2 lg:mt-4 rounded-lg bg-base-100 w-10 h-10 flex items-center justify-center"
      target="_blank"
    >
      <font-awesome-icon :icon="item.icon" class="text-2xl text-secondary" />
    </a>
  </div>
</template>

<script lang="ts" setup>
interface Social {
  icon: string
  link: string
}

const social: Social[] = [
  {
    icon: 'fa-brands fa-instagram',
    link: 'https://www.instagram.com/ma__shop____'
  },
  {
    icon: 'fa-brands fa-telegram',
    link: ''
  },
  {
    icon: 'fa-solid fa-headset',
    link: ''
  }
]
</script>

<style lang="scss" scoped></style>
