import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msgAlerts: [],
      selected: [],
      movies: []
    }
  }

  setSelected = (title) => {
    this.setState({ selected: title })
  }

  setMovies = (titles) => {
    this.setState({ movies: titles })
  }

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/' render={() => (
            <Movies msgAlert={this.msgAlert} selected={this.state.selected} setSelected={this.setSelected} movies={this.state.movies} setMovies={this.setMovies}/>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
