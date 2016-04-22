import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './App'
import Home from './components/Home'
import LogTime from './components/LogTime'
import TimeEntries from './components/TimeEntries'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="time-entries" component={TimeEntries}>
        <Route path="log-time" component={LogTime}/>
      </Route>
    </Route>
  </Router>,
  document.querySelector('#app')
)
