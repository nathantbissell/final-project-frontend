import React, { Component } from 'react'
import './styles/DropList.scss'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import axios from 'axios'
import apiUrl from './apiConfig'

class DropList extends Component {
  state = {
    players: [
      { name: 'Patrick Mahomes', status: 'available' },
      { name: 'Drew Brees', status: 'available' },
      { name: 'Tom Brady', status: 'available' },
      { name: 'Baker Mayfield', status: 'available' },
      { name: 'Case Keenum', status: 'available' },
      { name: 'Todd Gurley', status: 'available' },
      { name: 'David Johnson', status: 'available' },
      { name: 'Joe Mixon', status: 'available' },
      { name: 'Phillip Lindsay', status: 'available' },
      { name: 'Saquon Barkley', status: 'available' },
      { name: 'DeAndre Hopkins', status: 'available' },
      { name: 'Julio Jones', status: 'available' },
      { name: 'ODell Beckham Jr', status: 'available' },
      { name: 'Stefon Diggs', status: 'available' },
      { name: 'AJ Green', status: 'available' },
      { name: 'Emmanuel Sanders', status: 'available' },
      { name: 'Jarvis Landry', status: 'available' },
      { name: 'Tyreek Hill', status: 'available' },
      { name: 'Travis Kelce', status: 'available' },
      { name: 'Rob Gronkowski', status: 'available' },
      { name: 'George Kittle', status: 'available' },
      { name: 'Bears Defense', status: 'available' },
      { name: 'Broncos Defense', status: 'available' },
      { name: 'Titans Defense', status: 'available' },
      { name: 'Giants Defense', status: 'available' }
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
      available: [],
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
            this.onDrop(e, 'available')
          }}
        >
          <span className='task-header'>Free Agency</span>
          {players.available}
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
