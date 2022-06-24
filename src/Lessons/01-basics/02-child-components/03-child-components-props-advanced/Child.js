import React, { Component } from 'react'

// Need to import PropTypes from this external library
import PropTypes from 'prop-types';


// Prop types only throw a console warning at runtime, no hard error checking.
// Default props are assigned first - PropType checking happens afterwards.
export default class Child extends Component {

  // Default props style 1
  // static defaultProps = {
  //   default: 1,
  //   defaultOverride: 2,
  // };

  render() {
    return (
      <div className='component child'>
        <p className='component-name'>Child</p>
        <div>Prop using default value of 1: {this.props.default} </div>
        <div>Prop overriding default value of 2: {this.props.defaultOverride} </div>
        <div>Prop always integer: {this.props.alwaysInt}</div>
        <div>Prop always string: {this.props.alwaysStr}</div>
        <div>Sum of all props: {this.props.default + this.props.defaultOverride + this.props.alwaysInt + this.props.alwaysStr}</div>
        <br></br>
        <p>
          Not 5140, but rather 91. Because propTypes don't enfore types, only
          log warning out to console.
        </p>
        <br></br>
        <p>
          Hence, 40, passed as a number, is also treated that way, despite
          being given prop type of string.
        </p>
      </div>
    )
  }
}

// Default props style 2 -  more consistent if we frequently use propTypes, as
// they're both outside. Also, consistent with function syntax, too.
Child.defaultProps = {
  default: 1,
  defaultOverride: 2,
};


// Notice small 'p' for propTypes property
Child.propTypes = {
  default         : PropTypes.number,
  defaultOverride : PropTypes.number,
  alwaysInt       : PropTypes.number,
  alwaysStr       : PropTypes.string,
}