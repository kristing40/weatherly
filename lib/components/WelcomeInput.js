require('../normalize.css');
require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';
import iconKeys from './icon-keys';

export default class WelcomeInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      welcomePage: true,
      cityStateName: '',
      weekDay: '',
      time: '',
      condtion: '',
      currentTemp: '',
      hi: '',
      low: '',
      weatherIcon: '',
      weatherSummary: '',
    };
  }

  componentDidMount() {
    const fromLocal = localStorage.getItem('city') ?
    localStorage.getItem('city') : '';
    this.setState({ input: fromLocal });
    if (fromLocal.length) {
      this.getWeather(fromLocal);
    }
  }

  handleSubmit() {
    this.getWeather(this.state.input);
    this.setState({ welcomePage: false });
    localStorage.setItem('city', this.state.input);
  }

  getWeather(location) {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${location}.json`, (data) => {
      const icon = `./lib/images/${iconKeys[data.current_observation.icon]}`;

      this.setState({ cityStateName: data.current_observation.display_location.full,
                      weekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
                      time: data.forecast.txt_forecast.date,
                      condition: data.current_observation.icon,
                      currentTemp: data.current_observation.feelslike_string,
                      hi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
                      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
                      weatherIcon: icon,
                      weatherSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
                      welcomePage: false
      });
    });
  }

  render() {
    if (this.state.welcomePage) {
      return (
      <section id="fullDisplay">
        <h1>Weatherly</h1>
      <div id="input-container">
        <input type = 'text'
               value = { this.state.input }
               placeholder = 'Enter your Zip Code or City/State'
               onChange = {(event) => {
                 this.setState({ input: event.target.value });
               }}/>
               <input id = 'submit-btn' type = 'submit' onClick = { () => this.handleSubmit()}/>
      </div>
               <h3>Don't let the weather catch you off guard!!</h3>
      </section>
    );
    } else {
      return (
        <section id="fullDisplay">
          <h1>Weatherly</h1>
          <div id="input-container">
            <input type = 'text'
                   value = { this.state.input }
                   placeholder = 'Enter your Zip Code or City/State'
                   onChange = {(event) => {
                     this.setState({ input: event.target.value });
                   }}/>
            <input id = 'submit-btn' type = 'submit' onClick = { () => this.handleSubmit()}/>
          </div>
          <div id="current-weather">
            <div id="current-weather-details">
              <p class="">{this.state.cityStateName}</p>
              <p class="">{this.state.weekDay} - {this.state.time}</p>
              <p class="">{this.state.condition}</p>
              <p class="">Current Temperature - {this.state.currentTemp}</p>
              <p class="">Today's Hi:{this.state.hi}</p>
              <p class="">Today's Low:{this.state.low}</p>
            </div>
            <div id="icon-box">
              <img src={this.state.weatherIcon}/>
            </div>
          </div>
          <div id="summary">
           {this.state.weatherSummary}
         </div>
         {/* <div id="sevenHour"></div>
         <div id="tenDay"></div> */}
         <h3>Don't let the weather catch you off guard!!</h3>
        </section>
      );
    }
  }
}
