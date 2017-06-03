import React, { Component } from 'react';
import './WordList.css';

/**
 * WordList is to display the list of unique words that are
 * being used in the application.
 */
class WordList extends Component {

  /**
   * Render the word object
   */
  renderWordObject(i) {
    return (
      <div key={i.arabicWord}>
        {i.arabicWord}
      </div>
    );
  }

  /**
   * Render method to display the list of vocabulary words
   */
  render() {
    let words = this.props.words.map(word => this.renderWordObject(word));

    return (
      <div className='word-list' style={{fontSize: this.props.fontSize + 'px'}}>
        {words}
      </div>
    );
  }
}

export default WordList;
