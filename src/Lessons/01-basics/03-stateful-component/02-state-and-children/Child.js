

import React, { Component } from 'react'

export default class Child extends Component {

  render() {
    return (
      <div className='component child'>
        <p className='component__name'>Child</p>
        <p>Parent Count = {this.props.count}</p>
        <button onClick={this.props.decrementCount}>Decrement</button>
        <button onClick={this.props.incrementCount}>Increment</button>
      </div>
    )
  }
}
