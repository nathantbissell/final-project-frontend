import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc'

const SortableItem = SortableElement(({ data }) => <li>{data}</li>)

const SortableList = SortableContainer(({ players }) => {
  return (
    <ul>
      {players.map((data, index) => (
        <SortableItem key={`player-${index}`} index={index} data={data} />
      ))}
    </ul>
  )
})

class SortableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        'player 1',
        'player 2',
        'player 3',
        'player 4',
        'player 5',
        'player 6'
      ],
      myTeam: ['player 1', 'player 2', 'player 3']
    }
  }

  //   componentDidMount() {
  //     axios
  //       .get(apiUrl + '/players')
  //       .then(res => {
  //         this.setState({ players: res.data.players })
  //       })
  //       .catch(err => console.error(err))
  //   }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ players }) => ({
      players: arrayMove(players, oldIndex, newIndex)
    }))
    // this.setState(({ myTeam }) => ({
    //   players: arrayMove(myTeam, oldIndex, newIndex)
    // }))
  }
  render() {
    return (
      <div className='row'>
        <SortableList players={this.state.players} onSortEnd={this.onSortEnd} />
        {/* <SortableList players={this.state.myteam} onSortEnd={this.onSortEnd} /> */}
      </div>
    )
  }
}

render(<SortableComponent />, document.getElementById('root'))
export default SortableComponent
