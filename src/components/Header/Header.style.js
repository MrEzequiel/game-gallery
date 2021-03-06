import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.colors.g2};
  box-shadow: 0 8px 8px -2px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;

  h1 {
    font-size: 2.2rem;
  }
`
