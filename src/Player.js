import React from 'react'

const Player = props => {
  return (
    <div>
      <h3>Name: {props.data.name}</h3>
      <p>Position: {props.data.pos}</p>
      <p>Value: {props.data.dollar}</p>
      <p>News {props.data.news}</p>
      <button onClick={props.addPlayer}>Add</button>
    </div>
  )
}

// pass in params
// playerType, remainingDollarAmnt
// check for type of player, check see if $$ amnt avail
// if true then send to api and patch team

export default Player
