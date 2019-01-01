import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>butts</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/auth/google"
            rel="noopener noreferrer"
          >
            Sign in with Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
