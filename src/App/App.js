

import React, { Component } from 'react'

import Grandparent from '../Lessons/02-pure-and-memo/02-nesting-children-outside-jsx/Grandparent';
import Parent from '../Lessons/02-pure-and-memo/02-nesting-children-outside-jsx/Parent';
import Child from '../Lessons/02-pure-and-memo/02-nesting-children-outside-jsx/Child';
import Grandchild from '../Lessons/02-pure-and-memo/02-nesting-children-outside-jsx/Grandchild';

class App extends Component {
  render() {
    return (
      <>
        <Grandparent/>
      </>
    )
  }
}


export default App;