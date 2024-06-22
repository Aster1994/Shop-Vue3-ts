<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center w-full px-3 md:px-6">
    <div class="header__wrapper w-full flex flex-col md:flex-row justify-between items-center">
      <Logo class="header__logo" />

      <div class="flex items-center">
        <nav class="header__nav">
          <RouterLink class="mx-3 text-sm" to="/"> خانه</RouterLink>
          <RouterLink class="mx-3 text-sm" to="/products"> محصولات</RouterLink>
          <RouterLink class="hidden md:inline mx-3 text-sm" to="/about"> درباره ی ما</RouterLink>
          <RouterLink class="hidden md:inline mx-3 text-sm" to="/contact">تماس با ما</RouterLink>
        </nav>
        <button class="d-btn d-btn-secondary mx-3">
          <span class="hidden md:inline">به حساب کاربری</span>ورود
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  nav a.router-link-exact-active {
    color: oklch(var(--a));
  }
}
</style>
