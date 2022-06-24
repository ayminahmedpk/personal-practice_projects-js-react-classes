import React, { Component } from 'react'

import CountContext from './CountContext.js';

import Child from './Child'

const countObject = {
  count: 0,
  incrementCount() {this.count++},
  decrementCount() {this.count--},
}

export default class Parent extends Component {
  render() {
    return (
      <CountContext.Provider value="Context String">
        <div className='component parent'>
          <p className='component__name'>Parent</p>
            <Child/>
        </div>
      </CountContext.Provider>
    )
  }
}
