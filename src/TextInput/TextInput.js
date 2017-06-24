import React, { Component } from 'react';
import './TextInput.css';

/**
 * TextInput is for any text entry into the application data
 */
class TextInput extends Component {

  /**
   * Render method
   */
  render() {
    const inputId = `${this.props.label}-input`;
    return (
      <label htmlFor={inputId} className='text-input'>
        {this.props.label}
        <input
          id={inputId}
          type='text'
          dir={this.props.direction ? this.props.direction : 'ltr'}
          className='input'
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
          style={{fontSize: this.props.fontSize + 'px'}}
        />
      </label>
    );
  }
}

export default TextInput;
