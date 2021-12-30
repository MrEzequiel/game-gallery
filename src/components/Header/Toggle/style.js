import styled from 'styled-components'

export const ToggleStyle = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span::before {
    transform: translateX(40px);
  }

  span {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    border-radius: 30px;

    &::before {
      content: '';
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      left: 5px;
      bottom: 5px;
      background: #fff;
      transition: transform 500ms cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }
`
