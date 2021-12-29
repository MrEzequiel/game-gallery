import React from 'react'

import { GameListLoadingStyle } from './styles'

function GameListCardLoading() {
  return (
    <GameListLoadingStyle>
      <div className="top-card"></div>
      <div className="mid-card"></div>
      <div className="bottom-card"></div>
    </GameListLoadingStyle>
  )
}

export default GameListCardLoading
