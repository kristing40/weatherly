require('../normalize.css');
require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';
import iconKeys from './icon-keys';
import SevenHourDisplay from './SevenHourDisplay';
import TenDayDisplay from './TenDayDisplay';

export default class WelcomeInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      welcomePage: true,
      errorMessage: false,
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
    localStorage.setItem('city', this.state.input);
  }

  getWeather(location) {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${location}.json`, (data) => {
      console.log(data);


      if (data.response.error) {
        const errorDisplay = data.response.error.description;

        this.setState({ errorMessage: true,
                        errorDisplay: errorDisplay
                      });

        console.log(this, 'error');
        console.log(this.errorMessage);
      } else {
        const icon = `./lib/images/${iconKeys[data.current_observation.icon]}`;
        const hourlyArray = data.hourly_forecast.slice(0, 7);
        const hourlyTimeArray = hourlyArray.map((hourObject) => {
          return hourObject.FCTTIME.civil;
        });
        const hourlyIcons = hourlyArray.map((hourObject) => {
          return hourObject.icon_url;
        });

        const hourlyTemp = hourlyArray.map((hourObject) => {
          return hourObject.temp.english;
        });
        const tenDayArray = data.forecast.simpleforecast.forecastday;
        const dayArray = tenDayArray.map((dayObject) => {
          return dayObject.high.fahrenheit;
        });
        const tenDayIconArray =  tenDayArray.map((dayObject) => {
          return dayObject.icon_url;
        });
        const tenDayHiArray = tenDayArray.map((dayObject) => {
          return dayObject.high.fahrenheit;
        });
        const tenDayLowArray = tenDayArray.map((dayObject) => {
          return dayObject.low.fahrenheit;
        });

        this.setState({ cityStateName: data.current_observation.display_location.full,
          weekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
          time: data.forecast.txt_forecast.date,
          condition: data.current_observation.icon,
          currentTemp: data.current_observation.feelslike_string,
          hi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          weatherIcon: icon,
          weatherSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
          hourlyTimeArray: hourlyTimeArray,
          hourlyIconArray: hourlyIcons,
          hourlyTempArray: hourlyTemp,
          dayArray: dayArray,
          tenDayIconArray: tenDayIconArray,
          tenDayHiArray: tenDayHiArray,
          tenDayLowArray: tenDayLowArray,
          welcomePage: false,
        });
      }
    });
  }

  render() {
    if (this.state.welcomePage && !this.state.errorMessage) {
      console.log('welcome')
      console.log(this.state.welcomePage);
      console.log(this.state.errorMessage);
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
               <h2>Welcome to weatherly!!  Enter you location above to find the weather.</h2>
               <h3>Don't let the weather catch you off guard!!</h3>
      </section>
    );
  } else if (this.state.errorMessage === true) {
    return(
      <section id="fullDisplay">
        <h1>Weatherly</h1>
      <div id="input-container">
        <input type = 'text'
               value = { this.state.input }
               placeholder = 'Please enter a valid zipcode or State/City'
               onChange = {(event) => {
                 this.setState({ input: event.target.value });
               }}/>
               <input id = 'submit-btn' type = 'submit' onClick = { () => this.handleSubmit()}/>
      </div>
              <h2 class='error-message'>{ this.state.errorDisplay }</h2>
               <h2>Welcome to weatherly!!  Enter your location above to find the weather.</h2>
               <h3>Don't let the weather catch you off guard!!</h3>
      </section>
    )
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
         <div id="seven-hour">
           <SevenHourDisplay cardTime={ this.state.hourlyTimeArray }
                             cardIcon={ this.state.hourlyIconArray }
                             cardTemp={ this.state.hourlyTempArray }
                           />
         </div>
         <div id="ten-day">
           <TenDayDisplay tenDayCard={this.state.dayArray}
                          tenDayIconCard={this.state.tenDayIconArray}
                          tenDayHiCard={this.state.tenDayHiArray}
                          tenDayLowCard={this.state.tenDayLowArray}
           />

         </div>
         <h3>Don't let the weather catch you off guard!!</h3>
        </section>
      );
    }
  }
}
