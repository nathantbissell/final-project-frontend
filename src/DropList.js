import React, { Component } from 'react'
import './styles/DropList.scss'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import axios from 'axios'
import apiUrl from './apiConfig'

class DropList extends Component {
  state = {
    players: [
      { name: 'Player 1', status: 'fa' },
      { name: 'Player 2', status: 'fa' },
      { name: 'Player 3', status: 'fa' },
      { name: 'Player 4', status: 'fa' },
      { name: 'Player 5', status: 'fa' },
      { name: 'Player 6', status: 'fa' },
      { name: 'Player 7', status: 'fa' }
    ]
  }

  onDragOver = event => {
    event.preventDefault()
  }

  onDragStart = (e, id) => {
    console.log('dragstart:', id)
    e.dataTransfer.setData('id', id)
  }

  onDrop = (e, category) => {
    const id = e.dataTransfer.getData('id')
    console.log('getting into onDrop', id)
    const players = this.state.players.filter(players => {
      if (players.name == id) {
        players.status = category
      }
      return players
    })
    this.setState({
      ...this.state,
      players
    })
  }

  render() {
    const players = {
      fa: [],
      myTeam: []
    }
    this.state.players.forEach(p =>
      players[p.status].push(
        <div
          key={p.name}
          onDragStart={e => this.onDragStart(e, p.name)}
          draggable
          className='draggable'
          style={{ backgroundColor: p.bgcolor }}
        >
          <ul className='display'>
            <li className='p'>{p.name}</li>
            <li className='p'>{p.status}</li>
          </ul>
        </div>
      )
    )
    return (
      <div className='container-drag'>
        <div
          className='freeAgency'
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, 'fa')
          }}
        >
          <span className='task-header'>Free Agency</span>
          {players.fa}
        </div>
        <div
          className='droppable'
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, 'myTeam')
          }}
        >
          <span className='task-header'>My Team</span>
          {players.myTeam}
        </div>
      </div>
    )
  }
}

export default DropList
