import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

class TeamDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      message: null
    }
  }

  deleteTeam = event => {
    event.preventDefault()
    const { id } = this.state
    const url = apiUrl + `/teams/${id}`
    // const data = {
    //   team: {
    //     _id: this.state._id
    //   }
    // }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.props.user.token}`
      }
    }

    axios.delete(url, options)
      .then(res =>
        this.setState({ message: `You deleted a team, ID: ${this.state.id}` })
      )
      .catch(console.error)
  }

  onIdChange = event => this.setState({ id: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.deleteTeam}>
          <input className="inputShow"
            placeholder='Id of team'
            value={this.state.id}
            onChange={this.onIdChange}/>
          <button type='submit' className="btn btn-danger">Delete</button>
        </form>
        {this.state.message && <span>{this.state.message} </span>}
      </div>
    )
  }
}

export default TeamDelete
