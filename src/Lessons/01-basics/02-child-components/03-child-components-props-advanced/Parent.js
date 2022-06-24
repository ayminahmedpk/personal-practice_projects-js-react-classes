import React, { Component } from 'react'
import Child from './Child'

export default class 
Parent extends Component {
  render() {
    return (
      <div className='component parent'>
        <p className='component-name'>Parent</p>
        <Child
          defaultOverride={20}
          alwaysInt={30}
          alwaysStr={40}
        />
      </div>
    )
  }
}
