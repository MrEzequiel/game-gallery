import styled from 'styled-components'

export const ErrorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  max-width: 400px;
  margin: 0 auto;

  @keyframes show-down {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(px);
    }
  }

  animation: show-down 500ms forwards cubic-bezier(0.39, 0.575, 0.565, 1);

  h4 {
    color: ${props => props.theme.colors.g7};
    font-weight: 400;
  }
`
