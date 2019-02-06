import axios from 'axios'
import Player from './Player.js'
import apiUrl from './apiConfig'

// class PlayerIndex extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       players: []
//     }
//   }

//   render() {
//     const players = this.state.players.map((data, index) => {
//       return <Player key={index} data={data} />
//     })
//     return <div>{players}</div>
//   }
// }
// export default PlayerIndex

// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import {
//   SortableContainer,
//   SortableElement,
//   arrayMove
// } from 'react-sortable-hoc'

// const SortableItem = SortableElement(({ value }) => <li>{value}</li>)

// const SortableList = SortableContainer(({ items }) => {
//   return (
//     <ul>
//       {items.map((value, index) => (
//         <SortableItem key={`item-${index}`} index={index} value={value} />
//       ))}
//     </ul>
//   )
// })

// class SortableComponent extends Component {
//   state = {
//     items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
//   }
//   onSortEnd = ({ oldIndex, newIndex }) => {
//     this.setState(({ items }) => ({
//       items: arrayMove(items, oldIndex, newIndex)
//     }))
//   }
//   render() {
//     return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
//   }
// }

// render(<SortableComponent />, document.getElementById('root'))
