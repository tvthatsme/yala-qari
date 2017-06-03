import React, { Component } from 'react';
import './RangeInput.css';

/**
 * RangeInput
 */
class RangeInput extends Component {

  /**
   * Class constructor
   */
  constructor(props) {
    super(props);

    // This component will keep track of its value
    this.value = props.default;

    // Default min value to 0 if not defined
    this.minVal = (props.min === undefined) ? '0' : props.min;

    // Default max value to 100 if not defined
    this.maxVal = (props.max === undefined) ? '100' : props.max;
  }

  /**
   * Handle change to the input range
   */
  handleChange(event) {
    this.value = event.target.value;
    this.props.update(event.target.value);
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className='range-input'>
        <p className='range-input__value'>{this.props.title}: {this.value}</p>
        <input
          className='range-input__slider'
          type='range'
          min={this.minVal}
          max={this.maxVal}
          value={this.props.default}
          step='1'
          onChange={event => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default RangeInput;
