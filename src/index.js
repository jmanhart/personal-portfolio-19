import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming';

import theme from '../src/utils/theme.js';
// Importing in Components
import App from './App';

render((
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));

