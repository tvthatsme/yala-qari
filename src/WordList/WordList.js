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
    const toggleText = i.inReadingList === 1 ? 'hide': 'show';
    return (
      <div key={i.id} className='WordItem'>
        <span>{i.arabicScript}</span>
        <div>
          <button className='word-button' onClick={e => this.props.toggleVisibility(i)}>{toggleText}</button>
          <button className='word-button' onClick={e => this.props.removeWord(i.id)}>remove</button>
        </div>
      </div>
    );
  }

  /**
   * Render method to display the list of vocabulary words
   */
  render() {
    // Create list of words sorted by id
    let words = this.props.words.sort((a, b) => {
      return a.id - b.id;
    }).map(word => this.renderWordObject(word));

    return (
      <div className='word-list' style={{fontSize: this.props.fontSize + 'px'}}>
        {words}
      </div>
    );
  }
}

export default WordList;
