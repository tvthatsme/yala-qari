import React, { Component } from 'react';
import VocabularyInput from '../VocabularyInput/VocabularyInput';
import WordList from '../WordList/WordList';
import './VocabularyDrawer.css';

/**
 * VocabularyDrawer is responsible for managing all volcabulary
 * word in the app. From here the user is able to enter, edit, review,
 * and remove words to be used in the application.
 */
class VocabularyDrawer extends Component {

  /**
   * Render method
   */
  render() {
    return (
      <div className='VocabularyDrawer'>
        <p>Add vocabulary words here</p>
        <VocabularyInput addWord={word => this.props.addWordToList(word)}/>
        <WordList
          words={this.props.words}
          fontSize={this.props.fontSize}
          toggleVisibility={word => this.props.toggleWordVisibility(word)}
          removeWord={id => this.props.removeWord(id)}
        />
      </div>
    );
  }
}

export default VocabularyDrawer;
