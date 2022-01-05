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
    background: linear-gradient(105.92deg, #262837 19.76%, #6B5E78 35.98%, #262837 57.83%, #342D3C 77.22%, #262837 87.44%);
  }

  a, a:link, a:visited, a:hover, a:focus {
    text-decoration: none;
    color: unset;
  }
`;
