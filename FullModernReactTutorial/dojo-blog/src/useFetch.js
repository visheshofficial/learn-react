import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    console.log('useEffect ran')
    setTimeout(() => {
      fetch(url)
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
          setError(err.message)
          setIsPending(false)
        })
    }, 5000)
  }, [url])

  return { data, isPending, error }
}
export default useFetch
