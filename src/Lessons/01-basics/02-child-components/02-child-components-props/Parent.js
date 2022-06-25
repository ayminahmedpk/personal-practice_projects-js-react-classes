

import React, { Component } from 'react'

import Child from './Child'

export default class Parent extends Component {
  counter = 0;
  incrementCounter = () => {this.counter++; console.log('click happened'); };
  decrementCounter = () => {this.counter--; console.log('click happened'); };
  
  
  // Force update makes it work.
  // It really needs a state change or a forced update to make react actually care about props

  // incrementCounter = () => {this.counter++; console.log('click happened'); this.forceUpdate();};
  // decrementCounter = () => {this.counter--; console.log('click happened'); this.forceUpdate();};

  // Try using one of these and one of the above together.
  // You'll see that count changes properly, but update isn't triggered. Man.
  render() {
    return (
      <>
        <div className='component parent'>
          <p>Parent</p>
          <p>Count: {this.counter}</p>
          <button onClick={this.decrementCounter}>Decrement Counter</button>
          <button onClick={this.incrementCounter}>Increment Counter</button>
          <Child
            sampleProp       = "Sample Prop"
            counter          = {this.counter}
            incrementCounter = {this.incrementCounter}
            decrementCounter = {this.decrementCounter}
          />
        </div>
      </>
    )
  }
}