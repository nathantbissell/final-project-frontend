import React from 'react'

const Team = props => {
  return (
    <div>
      <h3>ID: { props.data.id }</h3>
      <p> QuarterBack: { props.data.qb }</p>
      <p> RunningBack 1: { props.data.rb1 }</p>
      <p> RunningBack 2: { props.data.rb2 }</p>
      <p> Wide Receiver 1: { props.data.wr1 }</p>
      <p> Wide Receiver 2: { props.data.wr2 }</p>
      <p> Wide Receiver 3: { props.data.wr3 }</p>
      <p> Tight End: { props.data.te }</p>
      <p> Flex: { props.data.flex }</p>
      <p> Defense: { props.data.dst }</p>
    </div>
  )
}

export default Team