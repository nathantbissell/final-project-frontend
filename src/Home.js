import React, { Component } from 'react'
import logo from './ff.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt='Fantasy Football' className='logo' />

        <h1>Welcome</h1>
        <h1>to</h1>
        <h1>Roto-React</h1>

        <p className='homeHeader text-muted'>
          A single page application designed by{' '}
          <a
            href='https://nathantbissell.github.io/Portfolio/'
            className='homeLink'
          >
            Nathan Bissell
          </a>
        </p>

        <p className='homeText'>
          Originally inspired by DraftKings, RotoReact was built to generate
          lineups for fantasy football players.
        </p>

        <p className='homeText text-muted'>
          Build 1: Implemented a .csv file with buttons to add players
        </p>
        <p className='homeText text-muted'>
          Build 2: Implemented drag and drop list to create a team
        </p>
        <p className='homeText good'>
          Build 3: Used form fields to send team data to Express backend server
          deployed on Heroku
        </p>
      </div>
    )
  }
}
