import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to signgen 2018</h1>
        </header>
        <p className="App-intro">
         more to come!
        </p>
      </div>
    );
  }
}

export default App;
