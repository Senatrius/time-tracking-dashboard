import {createGlobalStyle} from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 52.65%;
  }

  body {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.secondaryText};
    background: ${({ theme }) => theme.colors.pageBackground};
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }
`;