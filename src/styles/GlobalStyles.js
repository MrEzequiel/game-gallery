import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button,
  input,
  textarea {
    outline: none;
    border: none;
    color: inherit;
    font-family: inherit;
  }

  :root {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  img {
    display: block;
    max-width: 100%;
  }

  body {
    font: 400 1.6rem 'Inter', sans-serif;
    background: #0E0E0E;
    color: #f7f7f7;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }
`
