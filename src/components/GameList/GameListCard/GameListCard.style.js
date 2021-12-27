import styled from 'styled-components'

export const GameListCardStyle = styled.div`
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  flex: 1;
  min-width: 300px;
  height: min-content;
  border: 1px solid ${props => props.border};
  background: #1a1a1a;
  overflow: hidden;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  transform: perspective(100vmax) translateZ(0) rotateX(0);
  transition: box-shadow 500ms, transform 500ms;
  border-radius: 10px 10px 0 0;
  animation: blink ${props => props.animation * 500}ms forwards;

  &:hover {
    box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.4);
    transform: perspective(100vmax) translateZ(30px) rotateX(5deg);
    z-index: 10;

    img {
      mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.65) 40%
      );
    }
  }

  img {
    position: relative;
    object-fit: cover;
    object-position: top center;

    height: 200px;
    width: 100%;

    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 50%
    );
  }

  h3 {
    position: relative;
    top: -15px;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    background: #000;
    padding: 5px;
    border-radius: 5px;
  }

  .bottom-info {
    position: relative;
    padding: 0 20px 20px;
    margin-top: 10px;
    color: #717171;

    strong {
      color: #b2b2b2;
    }

    p + p {
      margin-top: 5px;
    }

    .rating-game {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      color: rgba(14, 14, 14, 0.2);

      font-size: 12rem;
      z-index: -1;
      line-height: 1em;

      @supports (-webkit-text-stroke: 1px black) {
        -webkit-text-stroke: 1px #0e0e0e;
        -webkit-text-fill-color: #1a1a1a;
      }
    }

    .genres-game {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      margin-top: 15px;

      li {
        padding: 5px;
        border-radius: 5px;
        background: #0e0e0e;
      }
    }
  }
`
