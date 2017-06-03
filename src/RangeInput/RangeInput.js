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
          min={this.props.min}
          max={this.props.max}
          value={this.props.default}
          step='1'
          onChange={event => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default RangeInput;
