import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { fetcher } from '@/api'
import { CatalogTypes } from '@/types'

const catalogInitialState: CatalogTypes = []
const URL = 'https://jsonplaceholder.typicode.com/posts'

export const useStore = defineStore('store', () => {
  //* state
  const catalogState = ref(catalogInitialState)

  //* actions
  const { error, isLoading, isReady } = useAsyncState(
    fetcher(URL),
    catalogInitialState,
    {
      onSuccess: (data) => (catalogState.value = data),
      delay: 1500,
    },
  )

  return {
    catalogState,
    error,
    isLoading,
    isReady,
  }
})
