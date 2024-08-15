<script lang="ts" setup>
import { ref, type Ref } from 'vue'

let phoneForm: Ref<string> = ref('+81 965-431-3024')
const emits = defineEmits<{
  setPhone: [phone: string]
}>()

function onSetPhone() {
  emits('setPhone', phoneForm.value)
}
</script>

<template>
  <p class="text-lg text-secondary-content">
    برای ادامه خرید یا ثبت‌نام در سایت لطفا شماره تماس خود را وارد نمایید
  </p>
  <label class="mt-8 w-full md:w-1/2 d-input-secondary d-input flex items-center gap-2">
    <svg
      class="phone-icon size-6 opacity-70"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="opacity-80 text-md whitespace-nowrap">شماره همراه</span>
    <input
      v-model="phoneForm"
      class="d-input-secondary"
      maxlength="11"
      placeholder="09130000000"
      readonly
      type="text"
    />
  </label>

  <button class="mt-8 w-full md:w-1/2 d-btn d-btn-accent" @click="onSetPhone">
    <span class="text-md font-semibold text-accent-content"> ارسال </span>
  </button>
</template>

<style lang="scss" scoped></style>
