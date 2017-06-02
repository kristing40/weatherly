require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';

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
    // console.log(this.state.input, 'in didMount first');
    const fromLocal = localStorage.getItem('city') ?
      localStorage.getItem('city') : '';

    //  console.log(this.state.input, 'in didMount after ternary');
    //  console.log(fromLocal, 'before getitem');
    //  console.log(JSON.parse(localStorage.getItem('city')));
     console.log('hello', fromLocal);
    //  console.log(this, 'this is this1');
    //  console.log(this.state, 'this.state before set');
    this.setState({ input: fromLocal });

    // console.log(this.state, 'this.state after set');
    // console.log(this, 'this is this2');
    // console.log(this.state.input, 'in didMount after set state');
    if(fromLocal.length) {
      this.getWeather(fromLocal);
    }
  }

  handleSubmit() {
    this.getWeather(this.state.input);
    this.setState({ welcomePage: false });
    localStorage.setItem('city', this.state.input);
    console.log(this.state.input, 'in submit');
  }

  getWeather(location) {

    console.log(this.state.input, 'in get weather');
    console.log(location, 'passed in location');
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${location}.json`, (data) => {
      console.log('data ', data);
        // console.log(data);
      this.setState({ cityStateName: data.current_observation.display_location.full,
                      weekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
                      time: data.forecast.txt_forecast.date,
                      condition: data.current_observation.icon,
                      currentTemp: data.current_observation.feelslike_string,
                      hi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
                      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
                      weatherIcon: data.current_observation.icon_url,
                      weatherSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
                      welcomePage: false
      });
    });
  }

  should

  render() {
    if (this.state.welcomePage) {
      return (
      <section id="fullDisplay">
        <h1>Weatherly</h1>
        <input type = 'text'
               value = { this.state.input }
               placeholder = 'Enter your zipcode or City/State'
               onChange = {(event) => {
                 this.setState({ input: event.target.value });
               }}/>
               <input id = 'submit-btn' type = 'submit' onClick = { () => this.handleSubmit()}/>
               <h3>Don't let the weather catch you off guard!!</h3>
      </section>
    );
    } else {
      return (
        <section id="fullDisplay">
          <h1>Weatherly</h1>
          <div>
            <input type = 'text'
                   value = { this.state.input }
                   placeholder = 'Enter your zipcode or City/State'
                   onChange = {(event) => {
                     this.setState({ input: event.target.value });
                   }}/>
            <input id = 'submit-btn' type = 'submit' onClick = { () => this.handleSubmit()}/>
          </div>
          <div id="current-weather">
            <div id="current-weather-details">
              <p>{this.state.cityStateName}</p>
              <p>{this.state.weekDay} - {this.state.time}</p>
              {/* <p>{this.state.time}</p> */}
              <p>{this.state.condition}</p>
              <p>Current Temperature - {this.state.currentTemp}</p>
              <p>Today's Hi: {this.state.hi}</p>
              <p>Today's Low: {this.state.low}</p>
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
