import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import A_GlobalComponant from './A-GlobaleComponant';
import reportWebVitals from './reportWebVitals';
import GlobalComponant from './GlobaleComponant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalComponant />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
