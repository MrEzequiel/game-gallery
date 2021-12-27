import React from 'react'
import useFetch from '../../hooks/useFetch'

import { MainContainer } from './GameList.style'
import GameListCard from './GameListCard'
import GameListContainer from './GameListContainer'

function GameList() {
  const { request, data, loading } = useFetch()
  const apiKey = process.env.REACT_APP_KEY_API

  React.useEffect(() => {
    request(`https://api.rawg.io/api/games?key=${apiKey}`)
  }, [request, apiKey])

  function renderGameList() {
    return (
      <GameListContainer>
        {data.results.map(result => (
          <GameListCard key={result.id} information={result} />
        ))}
      </GameListContainer>
    )
  }

  return (
    <MainContainer>
      <h1>Popular games:</h1>

      {!!loading && <p>Loading...</p>}

      {!!data && renderGameList()}
    </MainContainer>
  )
}

export default GameList
