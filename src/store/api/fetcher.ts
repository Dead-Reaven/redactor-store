import axios from 'axios'

export const fetcher = async (): Promise<any> =>
  await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    console.log('fetcher called')
    return res.data
  })
