import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'bclover'
  }

  inputChangeHandler = (evt) => {
    console.log('inputChangeHandler triggered!', evt);
    this.setState({username: evt.target.value});
  }
  render() {
    return (
      <div className="App">
          <UserInput change={this.inputChangeHandler} name={this.state.username}/>
          <UserOutput user={this.state.username}/>
          <UserOutput user={this.state.username}/>
      </div>
    );
  }
}

export default App;
