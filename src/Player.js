import React, { Component } from 'react'
import axios from 'axios'
const newPlayers = []

class Player extends Component {
  addPlayer = event => {
    event.preventDefault()
    // this.setState({ name: event.target.value })
    // axios patch pushing to /my-team --> data
    console.log('name', this.props.data.name)
    console.log('position', this.props.data.pos)
    console.log('dollar', this.props.data.dollar)
    
    newPlayers.push(this.props.data)
    console.log(newPlayers)
    return newPlayers
    // axios
    //   .patch('http://localhost:4741/teams/:id', {
    //     headers: {
    //       Authorization: `Token token=${this.props.user.token}`
    //     }
    //   })
    //   .then(res => {
    //     this.setState({ players: res.data.players })
    //   })
    //   .then(() => this.props.flash('BIG MOOD', 'flash success'))
    //   .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <h3>Name: {this.props.data.name}</h3>
        <p>Position: {this.props.data.pos}</p>
        <p>
          Value: <b>${this.props.data.dollar}</b>
        </p>
        <button onClick={this.addPlayer}>Add</button>
      </div>
    )
  }
}

// pass in params
// playerType, remainingDollarAmnt
// check for type of player, check see if $$ amnt avail
// if true then send to api and patch team

export default Player
