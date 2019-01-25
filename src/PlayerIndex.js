import React, { Component } from 'react'
import axios from 'axios'
import Player from './Player.js'
import apiUrl from './apiConfig'

class PlayerIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
    // this.addPlayer = this.addPlayer.bind(this)
  }

  // addPlayer = (event) => {
  //   // this.setState({ name: event.target.value })
  //   const { id, name, pos, dollar } = this.state
  //   console.log('within addPlayer')
  //   console.log(this.state)
  // }

  // onTeamChange = event => this.setState({ 
  //   if (this.state.pos === 'qb')
  //   {
  //     this.setState({ id: event.target.value })
  //   }))
  // })

  componentDidMount() {
    const { flash } = this.props
    // get all players
    axios
      .get(apiUrl, '/players', {
        headers: {
          Authorization: `Token token=${this.props.user.token}`
        }
      })
      .then(res => {
        this.setState({ players: res.data.players })
      })
      .then(() => this.props.flash('BIG MOOD', 'flash success'))
      .catch(err => console.error(err))
  }

  // addPlayer = event => {
  //   event.preventDefault()
  //   console.log('in addPlayer()')
  //   // const data = { ...this.state}

  //   // return axios.patch(data, this.props.user)
  //   //   .then(() => this.props.flash('Added to Team')
  //   //   .then(axios)
  // }

  // export const axiosPatchMovie = (data, user) => {
  //   const { id } = data
  //   delete data.id
  //   return axios.patch(apiUrl + '/movies/' + id, { movie: { ...data }}, {
  //     headers: {
  //       'Authorization': `Token token=${user.token}`,
  //     }
  //   })
  // }

  render() {
    const players = this.state.players.map((data, index) => {
      return <Player key={index} data={data} />
      // <button onClick={this.addPlayer}>NewAdd</button>
    })
    return (
      <div>
        {players}
        {/* <button onClick={this.addPlayer}>NewAdd</button> */}
      </div>
    )
  }
}
export default PlayerIndex
