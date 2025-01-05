import router from '@/router'
import { createFetch, useStorage } from '@vueuse/core'
import { userStore } from '@/stores/user'
import { type Ref, ref } from 'vue'
import type { Tokens } from '@/types/User'

const tokensStorage = useStorage('tokensStorage', ref({}) as Ref<Tokens>)
const token = tokensStorage.value.token
// config useFetch from vueUse
const useMyFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  // combination: 'overwrite',

  options: {
    updateDataOnError: true,

    // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    async beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      }

      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      }

      return { options }
    },
    async onFetchError(ctx) {
      // ctx.data can be null when 5xx response
      if (ctx.data === null) ctx.error = new Error('Error')
      if (ctx.response?.status === 404) router.push('/')
      else if (ctx.response?.status === 401 && token) {
        const { getToken, logout } = userStore()
        await getToken()
        logout()
      } else new Error('Error')

      return ctx
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})
export default useMyFetch
