import React, { Component } from 'react'

import Parent from './Parent';
import Child from './Child';
import Grandchild from './Grandchild';

export default class Grandparent extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       count: 0,
    }
  }

  name = "Grandparent";
  decrement = () => {this.setState((state) => ({count: state.count-1}))}
  increment = () => {this.setState((state) => ({count: state.count+1}))}
  maintain  = () => {this.setState(this.state)}

  render() {
    return (
      <>
        <div className="component grandparent">
          <p className="component__name">{this.name}</p>
          <p>Count = {this.state.count}</p>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.maintain}> Maintain </button>
        </div>

        <Parent>
          <Child>
            <Grandchild/>
          </Child>
        </Parent>
      </>
    )
  }
}
