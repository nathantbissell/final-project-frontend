import React, { Component } from 'react'
import axios from 'axios'

class TeamCreate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      teamName: '',
      message: null
    }
  }

  createTeam = event => {
    axios
      .post('http://localhost:4741/teams', {
        headers: {
          Authorization: `Token token=${this.props.user.token}`
        },
        team: {
          teamName: this.state.teamName
        }
      })
      .then(res =>
        this.setState({ message: `made new team with ID: ${res.data.team.id}` })
      )
      .catch(console.error)
  }

  onTeamChange = event => this.setState({ teamName: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.createTeam}>
          <input
            placeholder='Team Name'
            value={this.state.teamName}
            onChange={this.onTeamChange}
          />
          <input type='submit' value='Create Team!' />
        </form>
        {this.state.message && <span> {this.state.message}</span>}
      </div>
    )
  }
}
export default TeamCreate
