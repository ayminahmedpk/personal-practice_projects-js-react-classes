import React, { Component } from 'react'

// Received props.children without explicitly asking for props anywahere
export default class Child extends Component {
  render() {
    const mappedChildren = this.props.children.map((child,index) => (
      <div data-testid="child-mapping" key={index}>{child}</div>)
    );
    return (
      <>
        <h3 data-testid='child'>Child</h3>
        {mappedChildren}
      </>
    )
  }
}
