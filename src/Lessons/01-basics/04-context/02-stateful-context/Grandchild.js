// Note how grandchild needs to enclose consumer's children in a function, and
// the function implicitly recieves the 'value' argument

import React, { Component } from 'react'

import CountContext from './CountContext'

export default class Grandchild extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          (value) => {
            return (
              <div className='component Grandchild'>
                <p className='component__name'>Grandchild</p>
                <p>Context value = {value.count}</p>
                <button onClick={value.decrement}>Decrement</button>
                <button onClick={value.increment}>Increment</button>
              </div>

            )
          }
        }
      </CountContext.Consumer>
    )
  }
}
