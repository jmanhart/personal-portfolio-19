import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'

// Importing in Components
import App from './App';

render((
    <BrowserRouter >
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'));

