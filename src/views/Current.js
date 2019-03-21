import React, { Component } from 'react';


class Current extends Component {
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
      <div>Current</div>
    );
  }
}

export default Current;
