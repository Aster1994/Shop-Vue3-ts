import { defineStore } from 'pinia'
import type Product from '@/types/Product'
import { useMyFetch } from '@/config'
import { computed, ref, type Ref } from 'vue'

export const productStore = defineStore('productStore', () => {
  const products: Ref<Product[]> = ref([])
  const productsLoading: Ref<boolean> = ref(false)
  const newestProducts = computed(() => {
    // products are Proxy Array
    const arr = JSON.parse(JSON.stringify(products.value))
    arr.splice(4)
    return arr
  })

  async function getProducts(): Promise<any> {
    try {
      productsLoading.value = true
      const { data } = await useMyFetch('products').json()
      if (data.value) {
        products.value = data.value.products
      }
      productsLoading.value = false
    } catch (error) {
      console.log('The Error is: ', error)
    }
  }

  return { products, productsLoading, getProducts, newestProducts }
})
// export const productStore = defineStore('productStore', {
//   state: () => ({ products: Array<Product>, productsLoading: false }),
//   actions: {
//     async getProducts(): Promise<any> {
//       try {
//         this.productsLoading = true
//         const { data } = await useMyFetch('products').json()
//         if (data.value) {
//           data.value.products.splice(5)
//           this.products = data.value.products
//         }
//       } catch (error) {
//         this.productsLoading = false
//         console.log('The Error is: ', error)
//       }
//     }
//   }
// })
