import React from 'react'

import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import { ErrorStyle } from './style'

function GameListError() {
  return (
    <ErrorStyle>
      <BsFillExclamationTriangleFill size={60} />
      <h4>An unexpected error occurred :(</h4>
    </ErrorStyle>
  )
}

export default GameListError
