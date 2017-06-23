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
            words={this.state.words}
            fontSize={this.state.fontSize}
          />
          <VocabularyDrawer
            words={this.state.words}
            addWordToList={word => this.addWordToList(word)}
          />
        </div>
      </div>
    );
  }
}

export default App;
