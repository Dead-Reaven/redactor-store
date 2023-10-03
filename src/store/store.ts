import { defineStore } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
// import { useAsyncState } from '@vueuse/core'
import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
import { fetcher } from './api/fetcher'
import ProductTypes from '@/types'

type CatalogTypes = Array<ProductTypes>
type ShoppingCardTypes = Array<ProductTypes['id']>

export const useStore = defineStore('store', () => {
  const catalog = ref<CatalogTypes>([])
  // const shoppingCard = ref<ShoppingCardTypes>([])

  useQuery({
    queryKey: ['test'],
    initialData: catalog,
    queryFn: fetcher,
    onSuccess(data) {
      catalog.value = data
    },
    refetchOnWindowFocus: false,
  })

  return { catalog }
})
