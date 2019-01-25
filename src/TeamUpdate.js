import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

class TeamUpdate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      qbName: '',
      qbDollar: '',
      rbName: '',
      rbDollar: '',
      wrName: '',
      wrDollar: '',
      teName: '',
      teDollar: '',
      dstName: '',
      dstDollar: '',
      message: null
    }
  }

  updateTeam = event => {
    event.preventDefault()
    const {
      id,
      qbName,
      qbDollar,
      rbName,
      rbDollar,
      wrName,
      wrDollar,
      teName,
      teDollar,
      dstName,
      dstDollar
    } = this.state

    const data = {
      team: {
        id,
        players: [
          qbName,
          qbDollar,
          rbName,
          rbDollar,
          wrName,
          wrDollar,
          teName,
          teDollar,
          dstName,
          dstDollar
        ]
      }
    }
    const url = apiUrl + `/teams/${id}`
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${this.props.user.token}`
      }
    }
    axios.patch(url, data, options)
      .then(res =>
        this.setState({
          message: `made a new team with ID: ${res.data.team.id}`
        })
      )
      .catch(this.setState({ message: 'You have invalid form data' }))
  }

  onIdChange = event => this.setState({ id: event.target.value })

  onQBNameChange = event => this.setState({ qbName: event.target.value })
  onQBDollarChange = event => this.setState({ qbDollar: event.target.value })

  onRBNameChange = event => this.setState({ rbName: event.target.value })
  onRBDollarChange = event => this.setState({ rbDollar: event.target.value })

  onWRNameChange = event => this.setState({ wrName: event.target.value })
  onWRDollarChange = event => this.setState({ wrDollar: event.target.value })

  onTENameChange = event => this.setState({ teName: event.target.value })
  onTEDollarChange = event => this.setState({ teDollar: event.target.value })

  onDSTNameChange = event => this.setState({ dstName: event.target.value })
  onDSTDollarChange = event => this.setState({ dstDollar: event.target.value })

  render() {
    return (
      <div className='playerAddMain'>
        <form onSubmit={this.updateTeam}>
          <input
            placeholder='Team ID'
            value={this.state.id}
            onChange={this.onIdChange}
          />
          <input
            placeholder='QB Name'
            value={this.state.qbName}
            onChange={this.onQBNameChange}
          />
          <input
            placeholder='QB Dollars'
            value={this.state.qbDollar}
            onChange={this.onQBDollarChange}
          />
          <input
            placeholder='RB Name'
            value={this.state.rbName}
            onChange={this.onRBNameChange}
          />
          <input
            placeholder='RB Dollars'
            value={this.state.rbDollar}
            onChange={this.onRBDollarChange}
          />
          <input
            placeholder='WR Name'
            value={this.state.wrName}
            onChange={this.onWRNameChange}
          />
          <input
            placeholder='WR Dollars'
            value={this.state.wrDollar}
            onChange={this.onWRDollarChange}
          />
          <input
            placeholder='TE Name'
            value={this.state.teName}
            onChange={this.onTENameChange}
          />
          <input
            placeholder='TE Dollars'
            value={this.state.teDollar}
            onChange={this.onTEDollarChange}
          />
          <input
            placeholder='DST Name'
            value={this.state.dstName}
            onChange={this.onDSTNameChange}
          />
          <input
            placeholder='DST Dollars'
            value={this.state.dstDollar}
            onChange={this.onDSTDollarChange}
          />
          <input type='submit' value='Create Team!' />
        </form>
        {this.state.message && <span> {this.state.message}</span>}
      </div>
    )
  }
}
export default TeamUpdate
