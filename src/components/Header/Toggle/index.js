import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

import { ToggleStyle } from './style'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import darkTheme from '../../../styles/themes/dark'
import lightTheme from '../../../styles/themes/light'

function ToggleInput() {
  const contextTheme = React.useContext(ThemeContext)

  const [toggle, setToggle] = React.useState(
    contextTheme.title === 'dark' ? false : true
  )

  const handleOnChange = () => {
    setToggle(prev => !prev)
    contextTheme.setTheme(toggle ? lightTheme : darkTheme)
  }

  return (
    <ToggleStyle>
      <input type="checkbox" checked={toggle} onChange={handleOnChange} />
      <span>{toggle ? <MdDarkMode /> : <MdLightMode />}</span>
    </ToggleStyle>
  )
}

export default ToggleInput
