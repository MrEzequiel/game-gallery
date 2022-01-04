import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function useTheme() {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [toggle, setToggle] = React.useState(theme === 'dark' ? true : false)

  React.useEffect(() => {
    setTheme(toggle ? 'dark' : 'light')
  }, [toggle, setTheme])

  return [toggle, setToggle]
}
