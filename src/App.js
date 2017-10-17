import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-fancy-lib/build/style.css';
import { Button, FancyMessage, Modal } from 'react-fancy-lib';

class App extends Component {
  componentWillMount() {
    this.state = {
      showModal: false
    };
  }

  handleTriggerClick() {
    this.setState({showModal: true});
  }

  handleClose() {
    console.log('i am close');
    this.setState({showModal: false});

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a Component Showcase for react-fancy-lib!</h1>
        </header>
        <div>
          <div className="fancy-lib-showcase-wrap">
            <h2 className="title is-3">Button Component</h2>
            <Button />
          </div>
          <div className="fancy-lib-showcase-wrap">
            <h2 className="title is-3">FancyMessage Component</h2>
            <FancyMessage />
          </div>
          <div className="fancy-lib-showcase-wrap">
            <h2 className="title is-3">Modal</h2>
            <button onClick={this.handleTriggerClick.bind(this)}>
              Trigger
            </button>
            <Modal
              isActive={this.state.showModal}
              onClose={this.handleClose.bind(this)}
              simpleMessageList={['Hi','I am a Modal']}
              desiredClassName={"fancy-lib-modal"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
