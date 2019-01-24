import React, { Component } from 'react'
import './styles/App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import PlayerIndex from './PlayerIndex.js'
import TeamCreate from './TeamCreate.js'
import TeamDelete from './TeamDelete.js'
import TeamUpdate from './TeamUpdate.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      isSelected: false
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(
      () => this.setState({ flashMessage: null }),
      2000
    )
  }

  render() {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        {/* React.Fragment removes the need for a <div> and disappears when rendering */}
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className='container'>
          <Route
            path='/sign-up'
            render={() => <SignUp flash={this.flash} setUser={this.setUser} />}
          />
          <Route
            path='/sign-in'
            render={() => <SignIn flash={this.flash} setUser={this.setUser} />}
          />
          {/* AuthenticatedRoute is used ONLY when a user has been signed in and has a valid token */}
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                flash={this.flash}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => <ChangePassword flash={this.flash} user={user} />}
          />

          <AuthenticatedRoute
            user={user}
            path='/players'
            render={() => <PlayerIndex user={user} />}
          />

          <AuthenticatedRoute
            user={user}
            path='/update-team'
            render={() => <TeamUpdate user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            path='/create-team'
            render={() => <TeamCreate user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            path='/delete-team'
            render={() => <TeamDelete user={user} />}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
