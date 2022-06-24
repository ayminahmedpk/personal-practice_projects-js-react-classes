// Context is simply a TRANSPORT mechanism - without prop drilling

// For presitent changes, stateful logic should be implemented at Parent and
// appropriate items (count + handlers) must be passed as value

import React, { Component } from 'react'

import CountContext from './CountContext.js';

import Child from './Child'


export default class Parent extends Component {

  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  incrementState = () => {this.setState((state) => ({count:state.count+1}))}
  decrementState = () => {this.setState((state) => ({count:state.count-1}))}

  render() {
    return (
      <CountContext.Provider value={{
        count: this.state.count,
        increment: this.incrementState,
        decrement: this.decrementState,
      }}>
        <div className='component parent'>
          <p className='component__name'>Parent</p>
          <p>Parent count: {this.state.count}</p>
            <Child/>
        </div>
      </CountContext.Provider>
    )
  }
}
