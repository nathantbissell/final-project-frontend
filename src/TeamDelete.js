import React, { Component } from 'react'
import axios from 'axios'

class TeamDelete extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      teamIndex: 0,
      message: null
    }
  }

  deleteTeam = () => {
    const { id } = this.state
    const idValid = parseInt(id) && parseInt(id) >= 0

    if (idValid) {
      axios
        .delete(`http://localhost:4741/teams/${parseInt(id)}`)
        .then(() =>
          this.setState({ message: `You deleted a team, ID: ${parseInt(id)}` })
        )
        .catch(console.error)
    } else {
      this.setState({ message: 'you did not enter a valid ID' })
    }
  }

  onIdChange = event => this.setState({ id: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.deleteTeam}>
          <input
            type='number'
            placeholder='Id of team to get'
            value={this.state.id}
            onChange={this.onIdChange}
          />
          <input type='submit' value='Delete Team' />
        </form>
        {this.state.message && <span>{this.state.message} </span>}
      </div>
    )
  }
}

export default TeamDelete
