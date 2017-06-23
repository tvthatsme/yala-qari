import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import WordList from '../WordList/WordList';
import './VocabularyDrawer.css';

/**
 * VocabularyDrawer is responsible for managing all volcabulary
 * word in the app. From here the user is able to enter, edit, review,
 * and remove words to be used in the application.
 */
class VocabularyDrawer extends Component {

  /**
   * Handle the input of a new word and call the update method
   */
  inputNewWord(newWord) {
    const word = {
      arabicScript: newWord,
      englishScript: 'stub',
      meaning: 'stub'
    };

    this.props.addWordToList(word);
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className='VocabularyDrawer'>
        <p>Add vocabulary words here</p>
        <TextInput
          direction='rtl'
          fontSize={this.props.fontSize}
          onInput={word => this.inputNewWord(word)}
        />
        <WordList
          words={this.props.words}
          fontSize={this.props.fontSize}
        />
      </div>
    );
  }
}

export default VocabularyDrawer;
