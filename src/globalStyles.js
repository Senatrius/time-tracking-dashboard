import {createGlobalStyle} from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: ${({ theme }) => theme.mobileFontSizes.secondaryText};
    background: ${({ theme }) => theme.colors.pageBackground};
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }
`;