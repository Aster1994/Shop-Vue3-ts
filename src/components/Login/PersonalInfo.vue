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
    <font-awesome-icon class="image-icon opacity-60 size-10" icon="fa-solid fa-image" />
    <input
      accept="image/*"
      class="w-full h-full rounded-full max-w-xs d-file-input d-file-input-ghost"
      type="file"
      @change="setPhoto"
    />
  </label>

  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 w-full">
    <label class="d-input-secondary d-input flex items-center gap-2">
      <span class="text-accent font-bold text-xs md:text-md whitespace-nowrap">نام</span>
      <input v-model="personalInfo.firstName" class="d-input-secondary" readonly type="text" />
    </label>
    <label class="flex-1 d-input-secondary d-input flex items-center gap-2">
      <span class="text-accent font-bold text-xs md:text-md whitespace-nowrap"> نام خانوادگی</span>
      <input v-model="personalInfo.lastName" class="d-input-secondary" readonly type="text" />
    </label>
  </div>
  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 w-full">
    <div class="grid grid-cols-2 gap-4">
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
    </div>
    <label class="d-input-secondary d-input flex items-center gap-2">
      <span class="text-accent font-bold text-xs md:text-md whitespace-nowrap">ایمیل</span>
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
