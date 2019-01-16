import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import Player from './Player.js'
import PlayerUpdate from './PlayerUpdate.js'
import PlayerShow from './PlayerShow.js'
import PlayerIndex from './PlayerIndex.js'
import Team from './Team.js'
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

  Playerlist = () => (
    <div>
      <Player name='test' pos='qb' dollar= {10}/>
    </div>
  )


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

        </main>

        <div>
          {/* this is inside JSX comment */}
          <h1>Welcome to RotoReact</h1>
          {/* 
            <li>
              <Link to='/create'>Create Team</Link>
            </li>
            <li>
              <Link to='/player'>Single Player</Link>
            </li>
            <li>
              <Link to='/players'>All Players</Link>
            </li>
            <li>
              <Link to='/update-team'>Update Team</Link>
            </li>
            <li>
              <Link to='/delete-team'>Delete Team</Link>
            </li>
          </ul> */}
          {/*  here are our routes
                ie what to render when we visit a link */}
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route exact path='/players' component={PlayerIndex} />
          <Route exact path='/player' component={PlayerShow} />
          <Route exact path='/create' component={TeamCreate} />
          <Route exact path='/update-team' component={TeamUpdate} />
          <Route exact path='/delete-team' component={TeamDelete} /> */}
          <ul>
            {/* {this.state.players.map((player, index) => {
              return (
                <Player 
                  key={player.index}
                  name={player.name}
                  pos={player.pos}
                  value={player.dollar}
                  news={player.news}
                />
              )
            })} */}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default App
