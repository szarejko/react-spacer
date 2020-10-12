import { About, ErrorPage, Search } from 'views/index';
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
  font-size: 1.6rem;
}
`

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
      <section>
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/about' component={About} />
          <Route component={ErrorPage} />
        </Switch>
      </section>
    </Router>
  )
}

export default App
