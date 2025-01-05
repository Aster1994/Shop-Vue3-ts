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
    <font-awesome-icon class="password-icon size-5 opacity-50" icon="fa-solid fa-key" />
    <span class="opacity-80 text-xs md:text-md whitespace-nowrap">رمز</span>
    <input v-model="passwordForm" class="d-input-secondary" readonly type="text" />
  </label>

  <button class="mt-8 w-full md:w-1/2 d-btn d-btn-accent" @click="onSetPassword">
    <span class="text-md font-semibold text-accent-content"> ورود </span>
  </button>
</template>

<style lang="scss" scoped></style>
