import React, { Component } from 'react'
import axios from 'axios'
import Team from './Team.js'
import apiUrl from './apiConfig'

class TeamShow extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      teamName: '',
      message: null,
      teamData: null
    }
  }

  showTeam = event => {
    event.preventDefault()
    const { id, teamName } = this.state

    const propData = { teamName }
    const url = apiUrl + '/teams'
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${this.props.user.token}`
      }
    }
    axios
      .get(url, propData, options)
      .then(res => this.setState({ teamData: res.data.team }))
      .catch(this.setState({ message: 'Unable to get this team' }))
  }

  onNameChange = event => this.setState({ teamName: event.target.value })

  render() {
    return (
      <div className='teamShow'>
        <form onSubmit={this.showTeam}>
          <input className='inputShow'
            placeholder='Team ID'
            value={this.state.teamName}
            onChange={this.onNameChange}
          />
          <button type='submit' className="btn btn-danger">Show</button>
        </form>
        {this.state.teamData && <Team data={this.state.teamData} />}
      </div>
    )
  }
}

export default TeamShow
