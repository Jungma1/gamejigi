import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: white;
  }

  body {
    background: linear-gradient(90.06deg, #262837 -2.23%, #6B5E78 23.62%, #262837 58.48%, #342D3C 89.39%, #262837 105.7%);
  }

  a, a:link, a:visited, a:hover, a:focus {
    text-decoration: none;
    color: unset;
  }

  button {
    border: none;
    outline: none;
    color: white;
  }
`;
