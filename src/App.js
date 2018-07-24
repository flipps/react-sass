import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Button msg="Click Me"/>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default App;
