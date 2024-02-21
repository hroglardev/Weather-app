import { fetchData } from './fetchData'
const debounce = (callback, delay) => {
  let timeOut
  return () => {
    clearTimeout(timeOut)
    setTimeout(() => {
      return callback
    }, delay)
  }
}

export const debounceFetchData = debounce(fetchData, 3000)
