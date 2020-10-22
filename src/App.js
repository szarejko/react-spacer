import * as view from 'views/index'

import { Modal, Navigation } from 'components/index'
import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { GlobalStyles } from './components/theme/GlobalStyles'

const App = () => {
  const [showModal, setShowModal] = useState(true)

  const handleToggleModal = () => setShowModal(false)

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
      <Modal toggleModal={handleToggleModal} show={showModal}>
        content
      </Modal>
    </Router>
  )
}

export default App
