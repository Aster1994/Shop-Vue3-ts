import router from '@/router'
import { createFetch } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { userStore } from '@/stores/user'

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
      const { tokens } = storeToRefs(userStore())
      const token = tokens.value.token

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
      else if (ctx.response?.status === 401) {
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
