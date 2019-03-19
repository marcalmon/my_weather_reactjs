import React, { Component } from 'react';
import './App.css';

// Components
import Cities from './components/Cities';
import CurrentCity from './components/CurrentCity'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-cities">
        <Cities />
        <Cities />
        <Cities />
        <Cities />
        <Cities />
        </div>
        <CurrentCity />
      </div>
    );
  }
}

export default App;
