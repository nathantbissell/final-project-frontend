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
          qb: this.state.qb,
          rb1: this.state.rb1,
          rb2: this.state.rb2,
          wr1: this.state.wr1,
          wr2: this.state.wr2,
          wr3: this.state.wr3,
          te: this.state.te,
          flex: this.state.flex,
          dst: this.state.dst
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
