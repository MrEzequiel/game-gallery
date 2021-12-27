import React from 'react'

import GameList from './components/GameList'
import Header from './components/Header'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Header />
      <GameList />
      <GlobalStyles />
    </>
  )
}

export default App
