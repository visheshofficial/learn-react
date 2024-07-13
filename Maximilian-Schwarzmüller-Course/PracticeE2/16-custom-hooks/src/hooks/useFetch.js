import { useEffect, useState } from 'react'

export function useFetch(fetchFn, intialValue) {
  const [isFetching, setIsFetching] = useState(intialValue)
  const [error, setError] = useState()
  const [fetchedData, setFetchedData] = useState()

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      try {
        const data = await fetchFn()
        setFetchedData(data)
      } catch (error) {
        setError({ message: error.message || 'Error fetching data' })
      }
      setIsFetching(false)
    }

    fetchData()
  }, [fetchFn])

  return { isFetching, error, fetchedData, setFetchedData }
}
