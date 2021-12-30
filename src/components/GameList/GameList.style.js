import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 0 40px;
  margin-top: 60px;

  @media (max-width: 600px) {
    padding: 0 20px;
    margin-top: 40px;
  }

  h1 {
    font-size: 2.6rem;
  }
`

export const ObserverElement = styled.span`
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
`
