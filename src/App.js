import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textLength: 0,
    chars: ['']
  }

  deleteCharacter = (evt, index) => {
    const currentChars = [...this.state.chars];
    currentChars.splice(index, 1);
    this.setState({chars: currentChars});
  }

  inputChangeHandler = (evt) => {
    let newChars = evt.target.value.split('');
    newChars = newChars.join('');
    this.setState({
      textLength: evt.target.value.length,
      chars: newChars,
    });
  }

  render() {
    
    let displayChars = null;

    if(this.state.textLength > 0) {
      const currentChars = [...this.state.chars];
      displayChars = currentChars.map((event, index) => {
        return (
          <CharComponent
            char={this.state.chars[index]} 
            key={index}
            click={(evt) => this.deleteCharacter(evt, index)}
          />
        ) 
      });
    }

    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(evt) => this.inputChangeHandler(evt)}
          value={this.state.chars.toString().split(',').join('')}>
        </input>
        <p>
          Length of text: {this.state.textLength}
        </p>
        <ValidationComponent length={this.state.textLength} />
        {displayChars}
      </div>
    );
  }
}

export default App;
