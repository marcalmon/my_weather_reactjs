import React, { Component } from 'react';


class Forecast extends Component {
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
      <div>Forecast</div>
    );
  }
}

export default Forecast;
