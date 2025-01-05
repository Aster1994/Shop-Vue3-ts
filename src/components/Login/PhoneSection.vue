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
    <font-awesome-icon
      class="phone-icon size-6 opacity-50"
      icon="fa-solid fa-mobile-screen-button"
    />
    <span class="opacity-80 text-xs md:text-md whitespace-nowrap">شماره همراه</span>
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
