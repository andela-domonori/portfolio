import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import LandingPage from './components/LandingPage'
import Contact from './components/Contact'
import About from './components/About'
import Articles from './components/Articles'

let routes = (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="contact" component={Contact} />
      <Route path="about" component={About} />
      <Route path="articles" component={Articles} />
    </Route>
  </Router>
)

export default routes
