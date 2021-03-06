import * as view from 'views/index'

import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { GlobalStyles } from './global-styles/globalStyles'
import { Modal } from 'components/index'
import ModalContext from 'context/ModalContext'
import TemplateDefault from 'templates/TemplateDefault'
import Wrapper from "hoc/Wrapper";

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
        <TemplateDefault>
          <Switch>
            <Route path='/' exact component={(view.SearchView)} />
            <Route path='/apotd' exact component={Wrapper(view.AstroPictureView)} />
            <Route path='/about' component={Wrapper(view.AboutView)} />
            <Route component={Wrapper(view.ErrorView)} />
          </Switch>
        </TemplateDefault>
        {modal}
      </ModalContext.Provider>
    </Router>
  )
}

export default App
