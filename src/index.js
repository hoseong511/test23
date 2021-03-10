import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hoho from './Head';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('App')
);


ReactDOM.render(
  <React.StrictMode>
    <Hoho />
  </React.StrictMode>,
  document.getElementById('Head')
);


