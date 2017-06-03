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
    if (this.state.input !== '') {
      this.getWeather();
    }
  }

  handleSubmit() {
    this.getWeather();
    this.setState({ welcomePage: false });
    // console.log(this.state.input);
  }

  getWeather() {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${this.state.input}.json`, (data) => {
      const icon = `./lib/images/${iconKeys[data.current_observation.icon]}`;
      console.log(icon);
      console.log(data);
      this.setState({ cityStateName: data.current_observation.display_location.full,
                      weekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
                      time: data.forecast.txt_forecast.date,
                      condition: data.current_observation.icon,
                      currentTemp: data.current_observation.feelslike_string,
                      hi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
                      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
                      weatherIcon: icon,
                      weatherSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
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
              <p>{this.state.cityStateName}</p>
              <p>{this.state.weekDay}</p>
              <p>{this.state.time}</p>
              <p>{this.state.condition}</p>
              <p>{this.state.currentTemp}</p>
              <p>{this.state.hi}</p>
              <p>{this.state.low}</p>
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
