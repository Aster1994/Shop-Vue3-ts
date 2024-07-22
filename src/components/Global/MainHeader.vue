<script lang="ts" setup>
import Logo from '@/components/Global/Logo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center w-full px-3 md:px-6">
    <div class="header__wrapper w-full flex flex-col md:flex-row justify-between items-center">
      <RouterLink to="/">
        <Logo class="header__logo" />
      </RouterLink>

      <label class="d-input flex items-center gap-2 mt-3 md:mt-0 w-full md:w-1/2">
        <svg
          class="size-6 opacity-70 rotate-90"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="opacity-80 md:text-lg whitespace-nowrap"> اینجا بگرد </span>
        <input class="" placeholder=" ..." type="text" />
      </label>

      <div class="flex items-center mt-3 md:mt-0">
        <RouterLink class="d-btn d-btn-circle d-btn-lg mx-1 md:mx-3" role="button" to="/">
          <svg
            class="size-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </RouterLink>
        <RouterLink class="d-btn d-btn-circle d-btn-lg mx-1 md:mx-3" role="button" to="/">
          <svg
            class="size-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </RouterLink>
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
