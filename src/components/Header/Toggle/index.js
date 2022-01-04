import React from 'react'
import useTheme from '../../../hooks/useTheme'

import { ToggleStyle } from './style'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

function ToggleInput() {
  const [toggle, setToggle] = useTheme()

  function handleChange() {
    setToggle(prev => !prev)
  }

  return (
    <ToggleStyle>
      <input type="checkbox" checked={toggle} onChange={handleChange} />
      <span>{toggle ? <MdLightMode /> : <MdDarkMode />}</span>
    </ToggleStyle>
  )
}

export default ToggleInput
