import React from 'react'

import { HeaderContainer } from './Header.style'
import ToggleInput from './Toggle'

function Header() {
  return (
    <HeaderContainer>
      <h1>
        <a href="/">Game Gallery</a>
      </h1>
      <ToggleInput />
    </HeaderContainer>
  )
}

export default Header
