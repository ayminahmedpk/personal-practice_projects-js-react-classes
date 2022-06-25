import React, { Component } from 'react'

import Grandchild from './Grandchild';

export default class Child extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       count: 0,
    }
  }

  name = "Child";
  decrement = () => {this.setState((state) => ({count: state.count-1}))}
  increment = () => {this.setState((state) => ({count: state.count+1}))}
  maintain  = () => {this.setState(this.state)}

  render() {
    return (
      <>
        <div className="component child">
          <p className="component__name">{this.name}</p>
          <p>Count = {this.state.count}</p>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.maintain}> Maintain </button>
        </div>

        {this.props.children}
      </>
    )
  }
}
