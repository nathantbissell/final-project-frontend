import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

class TeamCreate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    console.log('props.user = ', props.user)
    console.log('props.user.token = ', props.user.token)
    console.log('props.user.id', props.user.id)
    console.log('props.user._id = ', props.user._id)
    this.state = {
      teamName: '',
      players: [],
      message: null
    }
  }

  createTeam = event => {
    event.preventDefault()
    const url = apiUrl + '/teams'
    const data = {
      team: {
        teamName: this.state.teamName,
        players: this.state.players
      }
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.props.user.token}`
      }
    }

    axios.post(url, data, options)
      .then(res =>
        this.setState({ message: `made new team with ID: ${res.data.team._id}` })
      )
      .catch(console.error)
  }

  onNameChange = event => this.setState({ teamName: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.createTeam}>
          <input
            placeholder='Team Name'
            value={this.state.teamName}
            onChange={this.onNameChange}/>
          <input type='submit' value='Create Team' />
        </form>
        {this.state.message && <span> {this.state.message}</span>}
      </div>
    )
  }
}
export default TeamCreate
