import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();