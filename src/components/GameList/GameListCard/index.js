import React from 'react'

import { GameListCardStyle } from './GameListCard.style'

function GameListCard({ information, counter }) {
  let date = new Date(information.released)
  date = date.toLocaleDateString('en-US')

  const ratingGame = information.ratings.reduce((acc, item) => {
    if (item.count > acc?.count) {
      return item
    }
    return acc
  })

  return (
    <GameListCardStyle
      border={'#' + information.dominant_color}
      animation={counter}
    >
      <img
        src={information.background_image}
        alt={information.name + ' image'}
        loading="lazy"
      />
      <h3>{information.name}</h3>

      <div className="bottom-info">
        <span className="rating-game">{information.rating_top}</span>
        <p>
          Released: <strong>{date}</strong>
        </p>

        <p>
          Rating:{' '}
          <strong>
            {ratingGame.title} ({ratingGame.count.toLocaleString()})
          </strong>
        </p>

        <ul className="genres-game">
          {information.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </GameListCardStyle>
  )
}

export default React.memo(GameListCard)
