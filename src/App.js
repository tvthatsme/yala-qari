import React, { Component } from 'react';
import AppHeader from './AppHeader';
import VocabularyDrawer from './VocabularyDrawer/VocabularyDrawer';
import ReadingSpace from './ReadingSpace/ReadingSpace';
import RangeInput from './RangeInput/RangeInput';
import db from './Database';
import './App.css';


class App extends Component {
  /**
   * Constructor with state set
   */
  constructor() {
    super();

    // define the apps state
    this.state = {
      words: [],
      fontSize: 40
    };
  }

  componentDidMount() {
    // Get all existing words from the database
    db.table('words')
      .toArray()
      .then((words) => {
        this.setState({ words });
      });
  }

  /**
   * Completely update the list with new words
   */
  addWordToList(word) {
    // Add the new word to the database and then update the state
    db.table('words')
      .add(word)
      .then((id) => {
        const newList = [...this.state.words, Object.assign({}, word, { id })];
        this.setState({ words: newList });
      });
  }

  /**
   * Toggle word visibility in both indexedDB and state
   */
  toggleWordVisibility(wordObject) {
    const visibilityState = (wordObject.inReadingList === 0) ? 1 : 0;

    db.table('words')
      .update(wordObject.id, {inReadingList: visibilityState})
      .then(() => {
        const wordUpdate = this.state.words.find((word) => word.id === wordObject.id);
        const newList = [
          ...this.state.words.filter((word) => word.id !== wordObject.id),
          Object.assign({}, wordUpdate, {inReadingList: visibilityState})
        ];
        this.setState({ words: newList });
      });
  }

  /**
   * Remove a vocabulary word from indexedDB and state
   */
  removeWord(id) {
    db.table('words')
      .delete(id)
      .then(() => {
        const newList = this.state.words.filter((word) => word.id !== id);
        this.setState({ words: newList });
      });
  }

  getVisibleWords() {
    return this.state.words.filter(word => word.inReadingList === 1);
  }

  /**
   * Update the app's font size (primarily for the reading space)
   */
  updateFontSize(newSize) {
    this.setState({
      fontSize: newSize
    });
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className='App'>
        <AppHeader/>
        <div className='content'>
          <RangeInput
            title='Font Size'
            default={this.state.fontSize}
            min='20'
            max='60'
            update={size => this.updateFontSize(size)}
          />
          <ReadingSpace
            words={this.getVisibleWords()}
            fontSize={this.state.fontSize}
          />
          <VocabularyDrawer
            words={this.state.words}
            addWordToList={word => this.addWordToList(word)}
            toggleWordVisibility={word => this.toggleWordVisibility(word)}
            removeWord={id => this.removeWord(id)}
          />
        </div>
      </div>
    );
  }
}

export default App;
