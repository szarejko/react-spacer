import * as view from 'views/index'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { GlobalStyles } from './components/global/GlobalStyles'
import { Navigation } from 'components/index'
import React from 'react'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
      <section>
        <Switch>
          <Route path='/' exact component={view.SearchView} />
          <Route path='/about' component={view.AboutView} />
          <Route component={view.ErrorView} />
        </Switch>
      </section>
    </Router>
  )
}

export default App
