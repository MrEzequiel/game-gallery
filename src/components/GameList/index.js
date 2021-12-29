import React from 'react'
import useFetch from '../../hooks/useFetch'

import { MainContainer } from './GameList.style'
import GameListCard from './GameListCard'
import GameListCardLoading from './GameListCardLoading'
import GameListContainer from './GameListContainer'
import GameListError from './GameListError'

function GameList() {
  const { request, data, loading, error } = useFetch()

  React.useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API

    async function fetchData() {
      request(`https://api.rawg.io/api/games?key=${apiKey}`)
    }
    fetchData()
  }, [request])

  function renderGameList() {
    return data.results.map((result, index) => (
      <GameListCard key={result.id} information={result} counter={index + 1} />
    ))
  }

  return (
    <MainContainer>
      <h1>Popular games:</h1>

      <GameListContainer>
        {!!loading && (
          <>
            <GameListCardLoading /> <GameListCardLoading />{' '}
          </>
        )}

        {!!data && renderGameList()}

        {!!error && <GameListError />}
      </GameListContainer>
    </MainContainer>
  )
}

export default GameList
