import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.querySelector('#root'),
    );
  });
