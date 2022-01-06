import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { App } from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  // Implementa acá el enrutador.
  document.getElementById('root')
);
