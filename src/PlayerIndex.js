import React, { Component } from 'react'
import axios from 'axios'
import Player from './Player.js'

class PlayerIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    // get all players
    axios
      .get('http://localhost:4741/players', {
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        }
      })
      .then(res => {
        this.setState({ players: res.data.players })
      })
      .then(() => this.props.flash('BIG MOOD', 'flash success'))
      .catch((error) => console.error(err))
  }

  render() {
    const players = this.state.players.map((data, index) => {
      return <Player key={index} data={data} />
    })
    return <div> {players} </div>
  }
}
export default PlayerIndex
