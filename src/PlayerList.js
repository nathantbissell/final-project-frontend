import React, { Component } from 'react'
import PlayerItems from './PlayerItems.js'

class PlayerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }

  addPlayer = event => {
    event.preventDefault()
    if (this._inputElement.value !== '') {
      const newPlayer = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.setState(prevState => {
        return {
          players: prevState.players.concat(newPlayer)
        }
      })
    }

    this._inputElement.value = ''
    console.log(this.state.players)
  }
  render() {
    return (
      <div className='playerListMain'>
        <div className='header'>
          <form onSubmit={this.addPlayer}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder='Enter Player'
            />
            <button type='submit'>Add</button>
          </form>
        </div>
        <PlayerItems entries={this.state.players}/>
      </div>
    )
  }
}

export default PlayerList
