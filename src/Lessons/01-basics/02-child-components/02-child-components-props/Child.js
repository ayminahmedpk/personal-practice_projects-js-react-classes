

import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div className='component child'>
        <p >Child</p>
        <p className='received-prop'>{this.props.sampleProp}</p>
        <p>Count: {this.props.counter}</p>
        <button onClick={() => {this.props.decrementCounter()}} >Decrement Counter</button>
        <button onClick={() => {this.props.incrementCounter()}} >Increment Counter</button>
      </div>
    )
  }
}
