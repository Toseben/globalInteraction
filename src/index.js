import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Get Random Users //
import { getUsers } from './utils/randomUserApi.js'
getUsers().then(userData => {

  ReactDOM.render(
    <App userData={userData}/>,
    document.getElementById('root')
  );

}).catch(error => {
  console.error(error.stack)
});
