import React, { PureComponent as Component } from 'react'
// import React, { Component } from 'react'



export default class Grandchild extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       count: 0,
    }
  }

  name = "Grandchild";
  decrement = () => {this.setState((state) => ({count: state.count-1}))}
  increment = () => {this.setState((state) => ({count: state.count+1}))}
  maintain  = () => {this.setState(this.state)}

  render() {
    console.log(`${this.name} rendered`)
    return (

        <div className="component grandchild">
          <p className="component__name">{this.name}</p>
          <p>Count = {this.state.count}</p>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.maintain}> Maintain </button>
        </div>

    )
  }
}
