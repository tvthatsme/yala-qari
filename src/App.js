import React, { Component } from 'react';
import AppHeader from './AppHeader';
import VocabularyDrawer from './VocabularyDrawer/VocabularyDrawer';
import ReadingSpace from './ReadingSpace/ReadingSpace';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <VocabularyDrawer/>
        <ReadingSpace/>
      </div>
    );
  }
}

export default App;
