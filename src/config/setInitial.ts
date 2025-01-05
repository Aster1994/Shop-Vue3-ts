import { useStorage } from '@vueuse/core'
import { userStore } from '@/stores/user'
import { type Ref, ref } from 'vue'
import type { Tokens, User } from '@/types/User'

function setInitial() {
  const { setToken, getUser } = userStore()
  const userStorage = useStorage('userStorage', ref({}) as Ref<User>)
  const tokensStorage = useStorage('tokensStorage', ref({}) as Ref<Tokens>)
  if (tokensStorage.value.token) setToken(tokensStorage.value)
  if (userStorage.value.id) {
    getUser()
  }
}

export default setInitial
