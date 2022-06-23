import React, { Component } from 'react'

import Child from './Child';
import Grandchild1 from './Grandchild1';
import Grandchild2 from './Grandchild2';


export default class Parent extends Component {
  render() {
    return (
      <>
        <h1 data-testid="parent">Parent</h1>
        <Child>
          <Grandchild1/>
          <Grandchild2/>
        </Child>
      </>
    )
  }
}
