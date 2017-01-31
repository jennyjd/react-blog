import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import HomePage from './components/HomePage/HomePage.jsx';
import Header from './components/Header/Header.jsx';
import App from './App.jsx';
import './index.sass';


ReactDOM.render( 
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Header} />
    </Route>
    <Route path='home' component={HomePage} />
  </Router> ,
  document.getElementById('root')
);
