import * as views from 'views/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Navigation } from 'components/index';
import React from 'react';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
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
          <Route path='/' exact component={views.Search} />
          <Route path='/about' component={views.About} />
          <Route component={views.ErrorPage} />
        </Switch>
      </section>
    </Router>
  )
}

export default App
