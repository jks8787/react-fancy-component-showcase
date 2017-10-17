import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-fancy-lib/build/style.css';
import { Button, FancyMessage } from 'react-fancy-lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a Component Showcase for react-fancy-lib!</h1>
        </header>
        <div className="showcase">
        <h2>Button Component</h2>
        <Button />
        <h2>FancyMessage Component</h2>
        <FancyMessage />
        </div>
      </div>
    );
  }
}

export default App;
