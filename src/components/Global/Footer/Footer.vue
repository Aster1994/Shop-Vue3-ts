<script lang="ts" setup>
import FooterLinks from '@/components/Global/Footer/FooterLinks.vue'
import FooterInfo from '@/components/Global/Footer/FooterInfo.vue'
import FooterSocial from '@/components/Global/Footer/FooterSocial.vue'
import FooterBadges from '@/components/Global/Footer/FooterBadges.vue'
</script>

<style lang="scss" scoped></style>

<template>
  <footer class="footer bg-secondary flex justify-center w-full 2xl:rounded-t-2xl">
    <div
      class="footer-wrapper p-8 lg:p-16 flex flex-col items-center lg:grid lg:grid-cols-3 gap-8 w-full max-w-layout-max-width text-secondary-content"
    >
      <FooterInfo class="flex flex-col items-center lg:items-start lg:justify-self-start" />
      <FooterLinks class="lg:justify-self-center pt-8 sm:pt-10 lg:pt-0 hidden lg:flex" />

      <div class="w-full h-full flex flex-col items-center gap-y-6 sm:flex-row sm:justify-between">
        <FooterLinks class="lg:hidden" />

        <FooterBadges />
        <FooterSocial />
      </div>
    </div>
  </footer>
</template>
