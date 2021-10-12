import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes';
import { GlobalStyles } from './globalStyles';

import Container from './components/Container';
import Grid from './components/Grid';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Container>
        <Grid>
          
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;