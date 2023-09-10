import React, { Component } from 'react'

export default class Greet extends Component {
constructor(props){
    super(props);
    this.state={
        name:"xyz",
    }
}
  render() {
    return (
      <div>
        <h1> This is a class component {this.state.name}</h1>
      </div>
    )
  }
}
// conditional rendering
// event handling DOM changes
// lists
