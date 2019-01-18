import React, { Component } from 'react'
import axios from 'axios'

class TeamUpdate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.updateTeam = this.updateTeam.bind(this)
  }

  updateTeam = () => {
    axios
      .patch('http://localhost:4741/team/:id', {
        team: {
          
        }
      })
      .then(res =>
        this.setState({
          message: `made a new team with ID: ${res.data.team.id}`
        })
      )
      .catch(this.setState({ message: 'You have invalid form data' }))
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
export default TeamUpdate
