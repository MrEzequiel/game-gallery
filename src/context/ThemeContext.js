import React from 'react'
import usePersistedState from '../hooks/usePersistedState'

import { ThemeProvider } from 'styled-components'
import darkTheme from '../styles/themes/dark'
import lightTheme from '../styles/themes/light'

export const ThemeContext = React.createContext()

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = usePersistedState('theme', 'dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [toggle, setToggle] = React.useState(theme === 'dark' ? true : false)

  React.useEffect(() => {
    setTheme(toggle ? 'dark' : 'light')
  }, [toggle, setTheme])

  return { toggle, setToggle }
}

export default ThemeContextProvider
