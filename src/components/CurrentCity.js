import React, { Component } from 'react'


export default class CurrentCity extends Component {
  render() {
    return (
      <div className="current-city">
        <div className="current-city-date">
        <p>Fecha</p>
        <p>Hora</p>
        </div>
        <div className="temperature">
          <p className="temp">17 °C</p>
        </div>
      </div>
    )
  }
}