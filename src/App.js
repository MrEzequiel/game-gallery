import React from 'react'
import ThemeContextProvider from './context/ThemeContext'

import GameList from './components/GameList'
import Header from './components/Header'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <GameList />
      <GlobalStyles />
    </ThemeContextProvider>
  )
}

export default App
