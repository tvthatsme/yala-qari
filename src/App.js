import React, { Component } from 'react';
import AppHeader from './AppHeader';
import VocabularyDrawer from './VocabularyDrawer/VocabularyDrawer';
import ReadingSpace from './ReadingSpace/ReadingSpace';
import './App.css';

class App extends Component {
  /**
   * Constructor with state set
   */
  constructor() {
    super();

    // define the apps state with zero words to start
    this.state = {
      words: []
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
   * Render method
   */
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <div className="content">
          <ReadingSpace words={this.state.words}/>
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
