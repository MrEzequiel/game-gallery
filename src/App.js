import React from 'react'
import { ThemeContext } from './context/ThemeContext'
import usePersistedState from './hooks/usePersistedState'

import GameList from './components/GameList'
import Header from './components/Header'

import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import darkTheme from './styles/themes/dark'

function App() {
  const [theme, setTheme] = usePersistedState('theme', darkTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <Header />
        <GameList />
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
