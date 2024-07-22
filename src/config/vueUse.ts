import { createFetch } from '@vueuse/core'

// config useFetch from vueUse
const useMyFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  // combination: 'overwrite',
  options: {
    updateDataOnError: true,

    //   // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    //   async beforeFetch({ options }) {
    //     const token = await getToken()
    //     options.headers.Authorization = `Bearer ${token}`
    //
    //     return { options }
    //   },
    onFetchError(ctx) {
      // ctx.data can be null when 5xx response
      if (ctx.data === null) ctx.error = new Error('Error')
      return ctx
    }
  }
})
export default useMyFetch
