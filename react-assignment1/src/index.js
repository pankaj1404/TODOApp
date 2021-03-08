import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserInput from './components/reactExample/assignment1BaseSyntax/userInput';
// import ErrorBoundary from './components/Util/ErrorBoundary'
ReactDOM.render(
  <React.StrictMode>
   <UserInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
