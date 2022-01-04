import styled from 'styled-components'

export const GameListContainerStyle = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  margin: 30px 0;

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`
