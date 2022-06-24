import React, { Component } from 'react'

import Grandchild from './Grandchild'

export default class Child extends Component {
  render() {
    return (
      <div className='component child'>
        <p className='component__name'>Child</p>
        <Grandchild/>
      </div>
    )
  }
}
