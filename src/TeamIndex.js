import React, { Component } from 'react'
import axios from 'axios'
import Team from './Team.js'
import apiUrl from './apiConfig'

class TeamIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    const url = apiUrl + '/teams'
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${this.props.user.token}`
      }
    }
    axios.get(url, options).then(res => {
      this.setState({ teams: res.data.teams })
    })
  }

  // you must have a render function that returns
  // some jsx
  render() {
    const printTeams = this.state.teams.map((data, index) => {
      return <Team key={index} data={data} />
    })

    return <div>{printTeams}</div>
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TeamIndex
