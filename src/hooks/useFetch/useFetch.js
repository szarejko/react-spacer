import { useEffect, useState } from 'react'

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(url, options)
        const data = await res.json()

        setResponse(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { response, error, isLoading }
}
