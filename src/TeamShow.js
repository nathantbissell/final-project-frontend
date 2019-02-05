import React, { Component } from 'react'
import axios from 'axios'
import Team from './Team.js'
import apiUrl from './apiConfig'

class TeamShow extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      teamName: '',
      message: null,
      data: null
    }
  }

  showTeam = event => {
    event.preventDefault()
    const url = apiUrl + '/team/' + this.state.teamName
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${this.props.user.token}`
      }
    }
    console.log('url', url)
    // console.log('propData', data)
    console.log('options', options)
    axios
      .get(url, options)
      .then(res => this.setState({ data: res.data.team }))
      .catch(this.setState({ message: 'Unable to get this team' }))
  }

  onNameChange = event => this.setState({ teamName: event.target.value })

  render() {
    return (
      <div className='teamShow'>
        <form onSubmit={this.showTeam}>
          <input
            className='inputShow'
            placeholder='Team Name'
            value={this.state.teamName}
            onChange={this.onNameChange}
          />
          <button type='submit' className='btn btn-danger'>
            Show
          </button>
        </form>
        {this.state.data && <Team data={this.state.data} />}
      </div>
    )
  }
}

export default TeamShow
