import { defineStore } from 'pinia'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'
// import { useAsyncState } from '@vueuse/core'
import { onMounted, ref } from 'vue'

type ProductTypes = {
  name: string
  price: number
  size: string
  description: string
  color?: string
  material?: string
  imgs?: any
  id: any
  // delete later
  title: string
}

type CatalogTypes = Array<ProductTypes>
type ShoppingCardTypes = Array<ProductTypes['id']>

export const useStore = defineStore('store', () => {
  const catalog = ref<CatalogTypes>([])
  const shoppingCard = ref<ShoppingCardTypes>([])

  const fetcher = async (): Promise<any> =>
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log('fetcher called')
        return res.data
      })

  useQuery({
    queryKey: ['test'],
    initialData: catalog,
    queryFn: fetcher,
    onSuccess(data) {
      catalog.value = data
    },
    refetchOnWindowFocus: false,
  })

  return { catalog, shoppingCard }
})
