import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
