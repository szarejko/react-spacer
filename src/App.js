import * as view from 'views/index';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Navigation } from 'components/index';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
`

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
