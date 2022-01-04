import styled from 'styled-components'

export const ToggleStyle = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span::before {
    transform: translateX(45px);
  }

  input:checked + span > svg {
    transform: translateX(-20px);
  }

  span {
    position: absolute;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.g4};
    border-radius: 30px;

    svg {
      color: ${props => props.theme.colors.text};
      transform: translateX(20px);
    }

    &:hover::before {
      box-shadow: 0 8px 8px 5px rgba(0, 0, 0, 0.1), 0 0 10px 2px #eb3737;
      border: 1px solid ${props => props.theme.colors.text};
    }

    &::before {
      content: '';
      position: absolute;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      box-shadow: 0 8px 8px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid transparent;

      left: 0px;
      bottom: -2.5px;
      background: ${props => props.theme.colors.text};
      transition: transform 500ms, box-shadow 200ms;
      transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }
`
