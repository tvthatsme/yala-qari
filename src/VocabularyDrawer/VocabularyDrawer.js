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
    let newWordList = this.props.words.concat({arabicWord: newWord});
    this.props.updateWordList(newWordList);
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className="VocabularyDrawer">
        <p>Add vocabulary words here</p>
        <TextInput onInput={word => this.inputNewWord(word)}/>
        <WordList words={this.props.words}/>
      </div>
    );
  }
}

export default VocabularyDrawer;
