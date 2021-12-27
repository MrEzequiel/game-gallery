import React from 'react'
import { GameListContainerStyle } from './GameListContainer.style'

function GameListContainer({ children }) {
  return <GameListContainerStyle>{children}</GameListContainerStyle>
}

export default GameListContainer
