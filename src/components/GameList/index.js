import React from 'react'
import useFetch from '../../hooks/useFetch'

import { MainContainer, ObserverElement } from './GameList.style'
import GameListCard from './GameListCard'
import GameListCardLoading from './GameListCardLoading'
import GameListContainer from './GameListContainer'
import GameListError from './GameListError'

function GameList() {
  const observeEl = React.useRef()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [gamesList, setGameList] = React.useState([])
  const { request, loading, error } = useFetch()

  React.useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API

    async function fetchData() {
      const { json } = await request(
        `https://api.rawg.io/api/games?key=${apiKey}&page=${currentPage}`
      )

      if (json) {
        setGameList(prevGames => [...prevGames, json])
      }
    }
    fetchData()
  }, [request, currentPage])

  React.useEffect(() => {
    if (!observeEl.current) return null

    const observe = new IntersectionObserver(entries => {
      const haveNext = !!gamesList[gamesList.length - 1].next

      if (entries.some(entry => entry.isIntersecting) && haveNext) {
        setCurrentPage(prev => prev + 1)
      }
    })

    observe.observe(document.querySelector('#end-of-cards'))

    return () => observe.disconnect()
  }, [gamesList])

  function renderGameList() {
    return gamesList.map(gameList =>
      gameList.results.map((result, index) => (
        <GameListCard
          key={result.id}
          information={result}
          counter={index + 1}
        />
      ))
    )
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

        {!!gamesList.length && (
          <>
            {renderGameList()}{' '}
            <ObserverElement
              id="end-of-cards"
              ref={observeEl}
            ></ObserverElement>
          </>
        )}

        {!!error && <GameListError />}
      </GameListContainer>
    </MainContainer>
  )
}

export default GameList
