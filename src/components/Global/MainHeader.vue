<script lang="ts" setup>
import Logo from '@/components/Global/Logo.vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { userStore } from '@/stores/user'
import { onMounted, type Ref, ref, watch } from 'vue'

import router from '@/router'

const route = useRoute()
// const routeQuery: unknown = route.query.query
const { user } = storeToRefs(userStore())
const query: Ref<string> | Ref<null> = ref('')

function onInputQuery(): void {
  if (query.value) router.push({ path: '/search', query: { query: query.value } })
  else router.push('/')
}

watch(route, (newValue) => {
  if (newValue.query.query) query.value = newValue.query.query
  else query.value = ''
})
onMounted(() => {
  if (route.query.query) query.value = route.query.query
  else query.value = ''
})
</script>

<template>
  <header class="flex items-center w-full px-3 md:px-16 bg-base-100">
    <div class="header__wrapper w-full flex flex-col md:flex-row justify-between items-center">
      <RouterLink to="/">
        <Logo class="header__logo" />
      </RouterLink>

      <label class="d-input flex items-center gap-2 mt-3 md:mt-0 w-full md:w-1/2">
        <font-awesome-icon
          class="password-icon size-6 opacity-50 rotate-90"
          icon="fa-solid fa-magnifying-glass"
        />
        <span class="opacity-80 md:text-lg whitespace-nowrap"> اینجا بگرد </span>
        <input v-model.trim="query" placeholder=" ..." type="text" @input="onInputQuery" />
      </label>

      <div class="flex items-center mt-3 md:mt-0">
        <RouterLink class="d-btn d-btn-circle d-btn-lg mx-1 md:mx-3" role="button" to="/">
          <font-awesome-icon class="basket-icon size-8" icon="fa-solid fa-cart-shopping" />
        </RouterLink>
        <RouterLink
          :to="user.id ? `user/${user.id}` : '/login'"
          class="d-btn d-btn-circle d-btn-lg mx-1 md:mx-3"
          role="button"
        >
          <img
            v-if="user.image"
            :alt="user.username"
            :src="user.image"
            class="rounded-full w-full h-full"
          />
          <font-awesome-icon v-else class="user-icon size-8" icon="fa-solid fa-user-tie" />
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
