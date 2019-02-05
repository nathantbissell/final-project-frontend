import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import messages from './auth/messages.js'


class TeamCreate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
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
      .then(() => this.props.flash(messages.teamCreateSuccess, 'flash-success'))
      .catch(() => this.props.flash(messages.teamCreateFailure, 'flash-error'))
  }

  onNameChange = event => this.setState({ teamName: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.createTeam}>
          <input className="inputShow"
            placeholder='Team Name'
            value={this.state.teamName}
            onChange={this.onNameChange}/>
          <button type='submit' className="btn btn-danger">Create</button>
        </form>
        {this.state.message && <span> {this.state.message}</span>}
      </div>
    )
  }
}
export default TeamCreate
