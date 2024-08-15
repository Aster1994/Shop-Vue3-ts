<script lang="ts" setup>
import { ref, type Ref } from 'vue'

let passwordForm: Ref<string> = ref('emilyspass')
const emits = defineEmits<{
  setPassword: [{ password: string; isFirst: boolean }]
}>()

function onSetPassword() {
  emits('setPassword', { password: passwordForm.value, isFirst: true })
}
</script>

<template>
  <p class="text-lg text-secondary-content">
    رمز ارسال شده به شماره تلفن خود را در این قسمت وارد نمایید.
  </p>
  <label class="mt-8 w-full ltr md:w-1/2 d-input-secondary d-input flex items-center gap-2">
    <svg
      class="password-icon size-6 opacity-70"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="opacity-80 text-md whitespace-nowrap">رمز</span>
    <input v-model="passwordForm" class="d-input-secondary" readonly type="text" />
  </label>

  <button class="mt-8 w-full md:w-1/2 d-btn d-btn-accent" @click="onSetPassword">
    <span class="text-md font-semibold text-accent-content"> ورود </span>
  </button>
</template>

<style lang="scss" scoped></style>
