// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class PlayerUpdate extends Component {
  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      pos: '',
      dollar: '',
      message: null
    }
  }

  // you must have a render function that returns
  // some jsx

  updatePlayer = event => {
    // destructured variables from form stored in this.state
    const { id, name, pos, dollar } = this.state

    // validating a few of our form values
    // const titleValid = title.length < 50
    // const idValid = parseInt(id) && parseInt(id) >= 0

    // post request to create a single player using axios

    axios
      .patch(`http://localhost:4741/players/${parseInt(id)}`, {
        player: { id, name, pos, dollar }
      })
      .then(res =>
        this.setState({
          message: `updated a player with ID: ${res.data.player.id}`
        })
      )
      .catch(console.error)
  }

  onIdChange = event => this.setState({ id: event.target.value })

  onTitleChange = event => this.setState({ name: event.target.value })

  onDirectorChange = event => this.setState({ director: event.target.value })

  onYearChange = event => this.setState({ year: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.updatePlayer}>
          <input
            placeholder='id'
            value={this.state.id}
            onChange={this.onIdChange}
          />
          <input
            placeholder='title'
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            placeholder='director'
            value={this.state.director}
            onChange={this.onDirectorChange}
          />
          <input
            placeholder='year'
            value={this.state.year}
            onChange={this.onYearChange}
            type='date'
          />
          <input type='submit' value='Update Player!' />
        </form>
        {this.state.message && <span>{this.state.message}</span>}
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default PlayerUpdate
