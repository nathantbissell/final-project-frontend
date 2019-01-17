import React, { Component } from 'react'
import axios from 'axios'

class Player extends Component {
  addPlayer = event => {
    event.preventDefault()
    // this.setState({ name: event.target.value })
    // axios patch pushing to /my-team --> data
    console.log('name', this.props.data.name)
    console.log('position', this.props.data.pos)
    console.log('dollar', this.props.data.dollar)
    axios
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

// handleClick = () => {
//   this.setState(state => ({ isSelected: !state.isSelected }))
// }

// pass in params
// playerType, remainingDollarAmnt
// check for type of player, check see if $$ amnt avail
// if true then send to api and patch team

export default Player
