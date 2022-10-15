import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Div100vh from 'react-div-100vh'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Div100vh>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Div100vh>
);


