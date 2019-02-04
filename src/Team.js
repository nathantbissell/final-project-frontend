import React from 'react'

const Team = props => {
  return (
    <div className='teamDisplay'>
      <h3>ID: { props.data._id }</h3>
      <h4> Team Name: { props.data.teamName }</h4>
      <p> QuarterBack Name: { props.data.players[0]}</p>
      <p> QuarterBack Dollar: { props.data.players[1]}</p>
      <p> RunningBack Name: { props.data.players[2] }</p>
      <p> RunningBack Dollar: { props.data.players[3] }</p>
      <p> Wide Receiver Name: { props.data.players[4]}</p>
      <p> Wide Receiver Dollar: { props.data.players[5] }</p>
      <p> Tight End Name: { props.data.players[6] }</p>
      <p> Tight End Dollar: { props.data.players[7] }</p>
      <p> Defense Name: { props.data.players[8] }</p>
      <p> Defense Dollar: { props.data.players[9] }</p>
    </div>
  )
}

export default Team