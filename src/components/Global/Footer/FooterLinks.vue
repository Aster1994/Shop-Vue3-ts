<template>
  <div class="footer-links flex justify-between">
    <div v-for="list in linkLists" :key="list.title" class="flex flex-col items-center">
      <div class="text-md xl:text-xl font-bold mb-1">
        {{ list.title }}
      </div>

      <RouterLink
        v-for="(item, index) in list.links"
        :key="index"
        :to="item.link"
        class="text-sm xl:text-lg font-normal mt-2 xl:mt-3 text-base-100"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Link {
  name: string
  link: string
}

interface LinkList {
  title: string
  links: Link[]
}

const linkLists: LinkList[] = [
  {
    title: 'دسترسی سریع',
    links: [
      {
        name: 'صفحه اصلی',
        link: '/'
      },
      {
        name: 'تماس با ما',
        link: '/contact'
      },
      {
        name: 'درباره ی ما',
        link: '/about'
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
