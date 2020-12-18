import { useState, useEffect} from 'react'
import {getGames} from './API'

export default function useGameSearch(pageNumber, query = null) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [games, setGames] = useState([])
  const [hasMore, setHasMore] = useState(true)

  // New results set when query changes
  useEffect(() => setGames([]), [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    getGames(pageNumber, query).then(res => {
      setGames(prevGames => [...prevGames, ...res])
      setHasMore(res.length > 0)
      setLoading(false)
    }).catch(e => {
      console.log(e)
      setError(true)
    })
  }, [pageNumber, query])

  return { games, loading, error, hasMore};
}
 