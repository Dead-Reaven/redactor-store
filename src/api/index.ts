import { CatalogTypes } from '@/types'
import axios from 'axios'

export const fetcher = async (URL: string): Promise<CatalogTypes> =>
  await axios.get(URL).then((res) => {
    console.log('fetcher called')
    return res.data
  })
