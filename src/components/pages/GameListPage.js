import React, { useState } from 'react'
import useGameSearch from '../../useGameSearch'
import { Waypoint } from 'react-waypoint'


export default function GameListPage() {
  const [pageNumber, setPageNumber] = useState(1)
  const { 
    games,
    loading,
    error,
    hasMore,
  } = useGameSearch(pageNumber)

  // Load more games when the page number increases

  return (
    <>
    <ul>
      {games.map(game => (
        <li key={game.id}>
          {game.username1} vs {game.username2}<br/>
          {game.winner === 1 ? game.username1 : game.username2} won
        </li>
      ))}
    </ul>
    {hasMore && <Waypoint onEnter={() => setPageNumber(p => p + 1)} />}
    {loading && <div>Loading...</div>}
    {error && <div>ERROR</div>}
    </>
  )
}
