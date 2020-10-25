import * as view from 'views/index'

import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { GlobalStyles } from './components/theme/GlobalStyles'
import Home from 'Home'
import { Modal } from 'components/index'

const App = () => {
  const [showModal, setShowModal] = useState(true)

  const handleToggleModal = () => setShowModal(false)

  return (
    <Router>
      <GlobalStyles />
      <Home>
        <Switch>
          <Route path='/' exact component={view.SearchView} />
          <Route path='/about' component={view.AboutView} />
          <Route component={view.ErrorView} />
        </Switch>
      </Home>
      <Modal toggleModal={handleToggleModal} show={showModal}/>
    </Router>
  )
}

export default App
