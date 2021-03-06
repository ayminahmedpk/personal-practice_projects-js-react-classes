// Context is simply a TRANSPORT mechanism - without prop drilling

// For presitent changes, stateful logic should be implemented at Parent and
// appropriate items (count + handlers) must be passed as value

import React, { Component } from 'react'

import CountContext from './CountContext.js';

import Child from './Child'

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
