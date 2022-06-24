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
                <p>Context value = {value}</p>
              </div>

            )
          }
        }
      </CountContext.Consumer>
    )
  }
}
