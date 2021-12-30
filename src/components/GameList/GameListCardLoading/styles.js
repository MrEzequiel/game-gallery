import styled from 'styled-components'

export const GameListLoadingStyle = styled.div`
  width: 300px;
  height: 350px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100%;
  }

  background: ${props => props.theme.colors.g2};
  border-radius: 10px 10px 0 0;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  & > div {
    background: ${props => props.theme.colors.g3};

    background: linear-gradient(
      110deg,
      ${props => props.theme.colors.g4} 8%,
      ${props => props.theme.colors.g2} 18%,
      ${props => props.theme.colors.g4} 33%
    );
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .top-card {
    height: 175px;
  }

  .mid-card {
    margin: 40px auto 20px;
    height: 30px;
    width: 80%;
    border-radius: 5px;
  }

  .bottom-card {
    margin: 20px auto 0;
    height: 50px;
    width: 80%;
    border-radius: 5px;
  }
`
