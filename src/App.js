import React, { Component } from 'react';
import './App.css';

// Components
import Button from './components/Button/Button';
import CurrentCity from './components/CurrentCity'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <div className="header-cities">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <CurrentCity />
      </div>
    );
  }
}

export default App;
