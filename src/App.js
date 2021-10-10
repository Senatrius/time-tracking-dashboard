import React from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <h1>o/</h1>
    </ThemeProvider>
  );
}

export default App;