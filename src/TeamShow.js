import React, { Component } from 'react'
import axios from 'axios'
import Team from './Team.js'
import apiUrl from './apiConfig'

class TeamShow extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    console.log('props.data= ', props.data)
    this.state = {
      id: '',
      message: null,
      teamData: null
    }
  }

  showTeam = event => {
    event.preventDefault()
    const { id } = this.state

    const propData = { id }
    const url = apiUrl + `/teams/${id}`
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${this.props.user.token}`
      }
    }
    console.log('url is', url)
    console.log('options is', options)
    console.log('data is', propData)
    axios
      .get(url, propData, options)
      .then(res => this.setState({ teamData: res.data.team }))
      .catch(this.setState({ message: 'Unable to get this team' }))
  }

  onIdChange = event => this.setState({ id: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.showTeam}>
          <input
            placeholder='Team ID'
            value={this.state.id}
            onChange={this.onIdChange}
          />
          <input type='submit' value='Show Team' />
        </form>
        {this.state.teamData && <Team data={this.state.teamData} />}
      </div>
    )
  }
}

export default TeamShow
