import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

class TeamUpdate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      teamName: '',
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
      teamName,
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
        teamName,
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
    const url = apiUrl + '/teams/' + teamName
    console.log(url)
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${this.props.user.token}`
      }
    }
    axios.patch(url, data, options)
      .then(res =>
        this.setState({
          message: `Updated: ${this.state.teamName}`
        })
      )
      .catch(this.setState({ message: 'You have invalid form data' }))
  }

  onNameChange = event => this.setState({ teamName: event.target.value })

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
      <div>
        <form className='playerAddMain' onSubmit={this.updateTeam}>
          <input className='playerAdd'
            placeholder='Team Name'
            value={this.state.teamName}
            onChange={this.onNameChange}
          />
          <input className='playerAdd'
            placeholder='QB Name'
            value={this.state.qbName}
            onChange={this.onQBNameChange}
          />
          <input className='playerAdd'
            placeholder='QB Dollars'
            value={this.state.qbDollar}
            onChange={this.onQBDollarChange}
          />
          <input className='playerAdd'
            placeholder='RB Name'
            value={this.state.rbName}
            onChange={this.onRBNameChange}
          />
          <input className='playerAdd'
            placeholder='RB Dollars'
            value={this.state.rbDollar}
            onChange={this.onRBDollarChange}
          />
          <input className='playerAdd'
            placeholder='WR Name'
            value={this.state.wrName}
            onChange={this.onWRNameChange}
          />
          <input className='playerAdd'
            placeholder='WR Dollars'
            value={this.state.wrDollar}
            onChange={this.onWRDollarChange}
          />
          <input className='playerAdd'
            placeholder='TE Name'
            value={this.state.teName}
            onChange={this.onTENameChange}
          />
          <input className='playerAdd'
            placeholder='TE Dollars'
            value={this.state.teDollar}
            onChange={this.onTEDollarChange}
          />
          <input className='playerAdd'
            placeholder='DST Name'
            value={this.state.dstName}
            onChange={this.onDSTNameChange}
          />
          <input className='playerAdd'
            placeholder='DST Dollars'
            value={this.state.dstDollar}
            onChange={this.onDSTDollarChange}
          />
          <button type='submit' className="btn btn-danger">Create</button>
        </form>
        {this.state.message && <span> {this.state.message}</span>}
      </div>
    )
  }
}
export default TeamUpdate
