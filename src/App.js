import * as view from 'views/index'

import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { GlobalStyles } from './components/theme/GlobalStyles'
import Home from 'Home'
import { Modal } from 'components/index'
import ModalContext from 'ModalContext'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const modal = showModal && <Modal setModalState={setShowModal} />

  return (
    <Router>
      <GlobalStyles isModalOpen={showModal} />
      <ModalContext.Provider value={setShowModal}>
        <Home>
          <Switch>
            <Route path='/' exact component={view.SearchView} />
            <Route path='/about' component={view.AboutView} />
            <Route component={view.ErrorView} />
          </Switch>
        </Home>
        {modal}
      </ModalContext.Provider>
    </Router>
  )
}

export default App
