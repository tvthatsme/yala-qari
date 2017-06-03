import React, { Component } from 'react';
import AppHeader from './AppHeader';
import VocabularyDrawer from './VocabularyDrawer/VocabularyDrawer';
import ReadingSpace from './ReadingSpace/ReadingSpace';
import RangeInput from './RangeInput/RangeInput';
import './App.css';

class App extends Component {
  /**
   * Constructor with state set
   */
  constructor() {
    super();

    // define the apps state with zero words to start
    this.state = {
      words: [],
      fontSize: 40
    };
  }

  /**
   * Completely update the list with new words
   */
  updateList(newList) {
    this.setState({
      words: newList
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
            updateWordList={list => this.updateList(list)}
          />
        </div>
      </div>
    );
  }
}

export default App;
