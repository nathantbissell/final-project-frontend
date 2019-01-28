import React, { Component } from 'react'

class PlayerItems extends Component {
  createPlayers(p) {
    return <li key={p.key}>{p.text}</li>
  }
  render() {
    const playerEntries = this.props.entries
    const listPlayers = playerEntries.map(this.createPlayers)
    return <ul className='theList'>{listPlayers}</ul>
  }
}

export default PlayerItems
