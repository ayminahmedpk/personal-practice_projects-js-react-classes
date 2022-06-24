

import React, { Component } from 'react'

export default class Parent extends Component {
  // Stateful class components needs an explicit constructor with state because
  // default implicit one only has super(props), not state.
  constructor(props) {
    super(props)
    // Initial state is set directly in the constructor
    this.state = {
       count: 0,
    }
  }

  // Future state changes will use setState
  // Immutable state (without immer) - provide a fresh, complete object

  // Passing function to setState, because new state value will be based on
  // previous value. Function imlicitly gets state and props
  incrementCount = () => {this.setState((state) => ({count: state.count + 1}))}
  decrementCount = () => {this.setState((state) => ({count: state.count - 1}))}
  
  // Alternative that sets the state directly, but only use when new state is
  // not being calculated from values in current state
  // incrementCount = () => {this.setState({count: this.state.count+1})}
  // decrementCount = () => {this.setState({count: this.state.count-1})}
  render() {
    return (
      <div className='component parent'>
        <p className='component__name'>Parent</p>
        <p>Count = {this.state.count}</p>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}
