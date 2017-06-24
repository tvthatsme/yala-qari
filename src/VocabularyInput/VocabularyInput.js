import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';

class VocabularyInput extends Component {

  /**
   * Constructor method
   */
  constructor(props) {
    super(props);

    // Define the default vocabulary object
    this.defaultObject = {
      arabicScript: '',
      englishScript: '',
      meaning: '',
      inReadingList: 1
    }

    // Set the state with the default empty object
    this.state = this.defaultObject;
  }

  /**
   * Validate the vocabulary object being submitted. If everything looks good,
   * add it to the app.
   */
  validateEntry() {
    if (this.state.arabicScript.length) {
      // Add word to app
      this.props.addWord(this.state);

      // Clear out the state of the vocabulary input
      this.setState(this.defaultObject);
    }
  }

  /**
   * Render method
   */
  render()  {
    return (
      <div>
        <TextInput
          label='Arabic Word'
          direction='rtl'
          value={this.state.arabicScript}
          onChange={word => this.setState({arabicScript: word})}
        />
        <TextInput
          label='English Pronunciation'
          direction='ltr'
          value={this.state.englishScript}
          onChange={word => this.setState({englishScript: word})}
        />
        <TextInput
          label='Word Meaning'
          direction='ltr'
          value={this.state.meaning}
          onChange={word => this.setState({meaning: word})}
        />
        <button onClick={e => this.validateEntry()}>Add Word</button>
      </div>
    )
  }
}

export default VocabularyInput;
