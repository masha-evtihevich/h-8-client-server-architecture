import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import UserList from './UserList'
import Login from './Login'

ReactDOM.render(
  <React.StrictMode>
    <UserList />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);