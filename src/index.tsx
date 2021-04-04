import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoyalDance from './components/RoyalDance';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoyalDance />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();