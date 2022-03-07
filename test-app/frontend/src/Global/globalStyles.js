import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: color 0.50s linear;
    transition: background-color 0.50s linear;
    height: 100%;
    margin: 0;
    padding: 2%;
  }
  span {
    background: ${({ theme }) => theme.text};
  }
  `
