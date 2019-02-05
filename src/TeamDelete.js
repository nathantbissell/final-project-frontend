import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import messages from './auth/messages.js'


class TeamDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamName: '',
      message: null
    }
  }

  deleteTeam = event => {
    event.preventDefault()
    const url = apiUrl + '/teams/' + this.state.teamName
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.props.user.token}`
      }
    }

    axios.delete(url, options)
      .then(() => this.props.flash(messages.teamDeleteSuccess, 'flash-success'))
      .catch(() => this.props.flash(messages.teamDeleteFailure, 'flash-error'))
  }

  onIdChange = event => this.setState({ teamName: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.deleteTeam}>
          <input className="inputShow"
            placeholder='Team Name'
            value={this.state.teamName}
            onChange={this.onIdChange}/>
          <button type='submit' className="btn btn-danger">Delete</button>
        </form>
        {this.state.message && <span>{this.state.message} </span>}
      </div>
    )
  }
}

export default TeamDelete
