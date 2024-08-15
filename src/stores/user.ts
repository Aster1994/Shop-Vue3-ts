import { defineStore } from 'pinia'
import type { Tokens, User } from '@/types/User'
import { useMyFetch } from '@/config'
import { useLocalStorage } from '@vueuse/core'
import { ref, type Ref } from 'vue'

export const userStore = defineStore('userStore', () => {
  const user = ref({}) as Ref<User>
  const tokens = ref({}) as Ref<Tokens>
  const userLoading: Ref<boolean> = ref(false)

  function setUser(payload: User) {
    user.value = payload
    useLocalStorage('userStorage', payload, {
      mergeDefaults: true
    })
  }

  function setToken(payload: Tokens) {
    user.value.token = payload.token
    user.value.refreshToken = payload.refreshToken
    tokens.value = payload
    useLocalStorage<Tokens>('tokensStorage', payload, {
      mergeDefaults: true
    })
  }

  function logout() {
    setUser({} as User)
    setToken({} as Tokens)
  }

  async function getUser(): Promise<any> {
    try {
      userLoading.value = true
      const { data, response } = await useMyFetch('auth/me').json()
      if (response.value?.ok) {
        setUser(data.value)
      } else {
        console.log(data.value.message)
      }
      userLoading.value = false
    } catch (error) {
      console.log('The Error is: ', error)
    }
  }

  async function getToken(): Promise<any> {
    try {
      const payload = JSON.stringify({
        refreshToken: user.value.refreshToken,
        expiresInMins: user.value.expiresInMins // optional, defaults to 60
      })

      const { data, response } = await useMyFetch('auth/refresh').post(payload).json()
      if (response.value?.ok) {
        setToken(data.value)
      } else {
        console.log(data.value.message)
      }
    } catch (error) {
      console.log('The Error is: ', error)
    }
  }

  return {
    user,
    userLoading,
    tokens,
    setUser,
    getUser,
    setToken,
    getToken,
    logout
  }
})
