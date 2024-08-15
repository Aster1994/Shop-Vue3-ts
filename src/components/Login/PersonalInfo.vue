<script lang="ts" setup>
import { ref, type Ref } from 'vue'

interface PersonalInfo {
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  // address: string
  // postCode: number
}

let personalInfo: Ref<PersonalInfo> = ref({
  email: 'emily.johnson@x.dummyjson.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  gender: 'female',
  image: 'https://dummyjson.com/icon/emilys/128'
})
let loading: Ref<boolean> = ref(false)

const emits = defineEmits<{
  setPersonalInfo: [personalInfo: PersonalInfo]
}>()

function setPhoto(image: unknown) {
  console.log('IMAGE INPUT FORM: ', image)
  // personalInfo.value.image = image
}

async function onSetPersonalInfo() {
  try {
    loading.value = true
    const payload = {
      email: personalInfo.value.email,
      firstName: personalInfo.value.firstName,
      lastName: personalInfo.value.lastName,
      gender: personalInfo.value.gender,
      image: personalInfo.value.image
    }
    emits('setPersonalInfo', payload)
    loading.value = false
  } catch (error) {
    console.log('The Error is: ', error)
  }
}
</script>

<template>
  <div v-if="personalInfo.image" class="w-24 h-24 border-4 border-base-100 rounded-full">
    <img :src="personalInfo.image" class="w-full h-full rounded-full" />
  </div>
  <label
    v-else
    class="avatar--uploader w-24 h-24 bg-base-100 rounded-full flex items-center justify-center"
  >
    <svg
      class="image-icon opacity-80 size-10"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <input
      accept="image/*"
      class="w-full h-full rounded-full max-w-xs d-file-input d-file-input-ghost"
      type="file"
      @change="setPhoto"
    />
  </label>

  <div class="mt-6 flex gap-4 w-full">
    <label class="flex-1 d-input-secondary d-input flex items-center gap-2">
      <span class="text-accent font-bold text-md whitespace-nowrap">نام</span>
      <input v-model="personalInfo.firstName" class="d-input-secondary" readonly type="text" />
    </label>
    <label class="flex-1 d-input-secondary d-input flex items-center gap-2">
      <span class="text-accent font-bold text-md whitespace-nowrap"> نام خانوادگی</span>
      <input v-model="personalInfo.lastName" class="d-input-secondary" readonly type="text" />
    </label>
  </div>
  <div class="mt-6 grid grid-cols-4 gap-4 w-full">
    <button
      :class="personalInfo.gender === 'male' ? 'bg-accent' : 'bg-base-100'"
      class="d-btn col-span-1"
      @click="personalInfo.gender = 'male'"
    >
      <span class="text-md font-bold whitespace-nowrap">آقا</span>
    </button>
    <button
      :class="personalInfo.gender === 'female' ? 'bg-accent' : 'bg-base-100'"
      class="d-btn col-span-1"
      @click="personalInfo.gender = 'female'"
    >
      <span class="text-md font-bold whitespace-nowrap">خانم </span>
    </button>
    <label class="d-input-secondary d-input flex items-center gap-2 col-span-2">
      <span class="text-accent font-bold text-md whitespace-nowrap">ایمیل</span>
      <input v-model="personalInfo.firstName" class="d-input-secondary" readonly type="text" />
    </label>
  </div>

  <!--  <div class="flex gap-4 w-full mt">-->
  <!--  <label class="flex-1 d-input-secondary d-input flex items-center gap-2">-->
  <!--    <span class=" text-accent font-bold text-md whitespace-nowrap">کدپستی</span>-->
  <!--    <input v-model="personalInfo.firstName" class="d-input-secondary" type="text" />-->
  <!--  </label>-->
  <!--  <label class="flex-1 d-input-secondary d-input flex items-center gap-2">-->
  <!--    <span class=" text-accent font-bold text-md whitespace-nowrap">آدرس</span>-->
  <!--    <input v-model="personalInfo.firstName" class="d-input-secondary" type="text" />-->
  <!--  </label>-->
  <!--  </div>-->
  <button class="mt-6 w-full md:w-1/2 d-btn d-btn-accent" @click="onSetPersonalInfo">
    <span class="text-md font-semibold text-accent-content"> ادامه </span>
  </button>
</template>

<style lang="scss" scoped>
.avatar--uploader {
  input[type='file'] {
    display: none;
  }
}
</style>
