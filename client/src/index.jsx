import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('app')
);

//import Provider and wrap your app in it
//then wrap it in router