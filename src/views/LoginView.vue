<script lang="ts" setup>
import Logo from '@/components/Global/Logo.vue'
import { ref, type Ref } from 'vue'
import { useMyFetch } from '@/config'
import { userStore } from '@/stores/user'
import router from '@/router'
import PhoneSection from '@/components/Login/PhoneSection.vue'
import PasswordSection from '@/components/Login/PasswordSection.vue'
import PersonalInfo from '@/components/Login/PersonalInfo.vue'

const { setUser, setToken } = userStore()

interface UserForm {
  username: string
  password: string
  phone: string
  expiresInMins: number
}

let userForm: Ref<UserForm> = ref({
  username: 'emilys',
  password: 'emilyspass',
  phone: '+81 965-431-3024',
  expiresInMins: 60 * 24 * 15
})
let loading: Ref<boolean> = ref(false)
let mode: Ref<'PHONE' | 'PASSWORD' | 'PERSONAL_INFO'> = ref('PHONE')

function setPhone(phone: string) {
  userForm.value.phone = phone
  mode.value = 'PASSWORD'
}

function setPassword(payload: { password: string; isFirst: boolean }) {
  userForm.value.password = payload.password

  if (payload.isFirst) {
    mode.value = 'PERSONAL_INFO'
  } else {
    onLogin()
  }
}

function setPersonalInfo(info: object) {
  userForm.value = {
    ...userForm.value,
    ...info
  }
  onLogin()
}

async function onLogin(): Promise<any> {
  try {
    loading.value = true
    const payload = {
      username: userForm.value.username,
      password: userForm.value.password,
      phone: userForm.value.phone,
      expiresInMins: userForm.value.expiresInMins
    }
    const { data, response } = await useMyFetch('auth/login', {}).post(payload).json()
    if (response.value && response.value.ok) {
      userForm.value = data.value
      await setUser(data.value)
      await setToken({ token: data.value.accessToken, refreshToken: data.value.refreshToken })
      await router.push('/')
    } else {
      console.log(data.value.message)
    }
    loading.value = false
  } catch (error) {
    console.log('The Error is: ', error)
  }
}
</script>

<template>
  <div class="login--page h-[90vh] flex justify-center p-3">
    <div
      class="login--page__box my-auto p-3 md:p-6 lg:p-16 w-full lg:w-3/4 h-fit bg-secondary rounded-2xl flex flex-col items-center"
    >
      <Logo :width="200" class="mb-10" typo />

      <PhoneSection v-if="mode === 'PHONE'" @setPhone="setPhone" />
      <PasswordSection v-else-if="mode === 'PASSWORD'" @setPassword="setPassword" />
      <PersonalInfo v-else-if="mode === 'PERSONAL_INFO'" @setPersonalInfo="setPersonalInfo" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
