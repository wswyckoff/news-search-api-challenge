import {useEffect, useState} from 'react'

import {API_KEY} from '../config'

export const useFetchNews = () => {
  const [isError, setIsError] = useState(false)
  const [isDoneFetching, setIsDoneFetching] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [isSearchTermSubmitted, setIsSearchTermSubmitted] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (isSearchTermSubmitted) {
      (async () => {
        setIsPending(true)
        setIsError(false)

        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
          )
          const result = await response.json()

          setIsPending(false)
          setIsError(false)
          setSearchResults(result.articles)
          setIsDoneFetching(true)
        } catch (e) {
          console.error(e)
          setIsPending(false)
          setIsError(true)
        }
      })()
    }

    return () => setIsSearchTermSubmitted(false)

  }, [isSearchTermSubmitted, searchTerm])

  return [
    {isDoneFetching, isError, isPending, searchResults, searchTerm},
    setIsSearchTermSubmitted,
    setSearchTerm,
  ]
}
