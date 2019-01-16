import React, { Component } from 'react'
import axios from 'axios'

class TeamUpdate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      budget: null,
      message: null,
      isSelected: false
    }
  }

  updateTeam = event => {

    if (isSelected === true) {
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
        .catch(console.error)
    } else {
      this.setState({ message: 'You have invalid form data' })
    }

    onQbChange = event => this.setState({ qb: event.target.value })
    onRb1Change = event => this.setState({ rb1: event.target.value })
    onRb2Change = event => this.setState({ rb2: event.target.value })
    onWr1Change = event => this.setState({ wr1: event.target.value })
    onWr2Change = event => this.setState({ wr2: event.target.value })
    onWr3hange = event => this.setState({ wr3: event.target.value })
    onTeChange = event => this.setState({ te: event.target.value })
    onFlexChange = event => this.setState({ flex: event.target.value })
    onDstChange = event => this.setState({ dst: event.target.value })

    handleClick = () => {
      this.setState(state => ({ isSelected: !state.isSelected }))
    }
  }
  render() {
    const { name } = this.props
    return (
      <div onClick={this.handleClick}>
        <h4> name </h4>
      </div>
    )
  }
}
export default TeamUpdate
