// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import Player from './Player.js'
import apiUrl from './apiConfig'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class PlayerShow extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      playerIndex: 0,
      playerData: null
    }
  }

  /*
  - form to enter the id of the player we want to get
  - use that form data to make a request of the format /players/:index
  - save that player data in state
  - use the state to render a player component
  */

  // you must have a render function that returns
  // some jsx

  getPlayer = () => {
    // get request to get a single player using axios
    axios
      .get(apiUrl, `/players/${this.state.playerIndex}`)
      .then(res => this.setState({ playerData: res.data.player }))
      .catch(console.error)
  }

  onIdChange = event => this.setState({ playerIndex: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.getPlayer}>
          <input
            type='number'
            placeholder='Id of player to get'
            value={this.state.playerIndex}
            onChange={this.onIdChange}
          />
          <input type='submit' value='Get Player!' />
        </form>
        {this.state.playerData && <Player data={this.state.playerData} />}
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default PlayerShow
