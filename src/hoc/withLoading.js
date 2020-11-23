import React, { Component } from 'react'

import SpinnerPage from 'components/global/SpinnerPage/SpinnerPage'
import { withRouter } from 'react-router'

export default (WithLoading) => {
  class Wrapper extends Component {
    state = {
      isLoading: true
    }

    componentDidMount = () => this.setTimer()

    componentDidUpdate = (prevProps) => {
      if (this.props.location !== prevProps.location) {
        this.clearTimer()
        this.setState({ isLoading: true }, () => this.setTimer())
      }
    }

    clearTimer = () => clearTimeout(this.timeout)
    timer = () => this.setState({ isLoading: false }, () => this.clearTimer())
    setTimer = () => (this.timeout = setTimeout(this.timer, 800))

    render = () =>
      <>
        {this.state.isLoading ?
        <SpinnerPage />
        :
        <WithLoading {...this.props} />}
      </>
  }
  return withRouter(Wrapper)
}
