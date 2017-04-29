import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { render } from 'react-dom'

import { Router, Route, browserHistory } from 'react-router'
import Home from './Page/Home'
import Play from './Page/Play'
import Result from './Page/Result'
import Test from './Page/Test'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/Play" component={Play}/>
    <Route path="/Result" component={Result}/>
  </Router>,
  document.getElementById('root')
);
