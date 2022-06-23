import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
// import reportWebVitals from './reportWebVitals';

import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root');
console.log(React.version);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();