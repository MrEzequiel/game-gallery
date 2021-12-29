import styled from 'styled-components'

export const GameListLoadingStyle = styled.div`
  width: 250px;
  height: 300px;
  overflow: hidden;

  background: #1a1a1a;
  border-radius: 10px 10px 0 0;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  & > div {
    background: #2e2e2e;

    background: linear-gradient(110deg, #404040 8%, #3c3c3c 18%, #404040 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .top-card {
    height: 125px;
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
