import * as view from 'views/index'

import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { GlobalStyles } from './global-styles/globalStyles'
import Home from 'Home'
import { Modal } from 'components/index'
import ModalContext from 'context/ModalContext'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [getModalData, setGetModalData] = useState({})
  const [getAllData, setGetAllData] = useState({})

  const handleGetModalData = (data) => {
    setGetModalData(data)
  }

  const handleGetAllFetchData = (data) => {
    setGetAllData(data)
  }

  const modal = showModal && (
    <Modal setModalState={setShowModal} data={getModalData} allData={getAllData} />
  )

  return (
    <Router>
      <GlobalStyles isModalOpen={showModal} />
      <ModalContext.Provider value={[setShowModal, handleGetModalData, handleGetAllFetchData]}>
        <Home>
          <Switch>
            <Route path='/' exact component={view.SearchView} />
            <Route path='/apotd' exact component={view.AstroPictureView} />
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
