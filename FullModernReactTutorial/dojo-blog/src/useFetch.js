import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    const abortController = new AbortController()

    console.log('useEffect ran')
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          console.log('Data is ')
          console.log(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          console.log(err.message)
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message)
            setIsPending(false)
          }
        })
    }, 1000)
    return () => abortController.abort()
  }, [url])

  return { data, isPending, error }
}
export default useFetch
