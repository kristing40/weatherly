// require('../normalize.css');
// require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';
import iconKeys from './icon-keys.jsx';
import SevenHourDisplay from './SevenHourDisplay.jsx';
import TenDayDisplay from './TenDayDisplay.jsx';

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
    // const fromLocal = localStorage.getItem('city') ?
    // localStorage.getItem('city') : '';
    // this.setState({ input: fromLocal });
    // if (fromLocal.length) {
    //   this.getWeather(fromLocal);
    // }
  }

  handleSubmit() {
    this.getWeather(this.state.input);
    // localStorage.setItem('city', this.state.input);
  }

  getWeather(location) {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${location}.json`, (data) => {
      if (data.response.error) {
        const errorDisplay = data.response.error.description;

        this.setState({ errorMessage: true,
                        errorDisplayMessage: errorDisplay,
                      });
      } else {
        //

        const icon = `./lib/images/${iconKeys[data.current_observation.icon]}`;
        const hourlyArray = data.hourly_forecast.slice(0, 7);
        const hourlyTime = hourlyArray.map((hourObject) => {
          return hourObject.FCTTIME.civil;
        });
        const hourlyIcons = hourlyArray.map((hourObject) => {
          return hourObject.icon;
        });
        console.log(hourlyIcons)
        const hourlyTemp = hourlyArray.map((hourObject) => {
          return hourObject.temp.english;
        });
        const tenDayArray = data.forecast.simpleforecast.forecastday;
        const tenDays = tenDayArray.map((dayObject) => {
          return dayObject.date.weekday;
        });
        const tenDayIcons = tenDayArray.map((dayObject) => {
          return dayObject.icon;
        });
        const tenDayHis = tenDayArray.map((dayObject) => {
          return dayObject.high.fahrenheit;
        });
        const tenDayLows = tenDayArray.map((dayObject) => {
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
          hourlyTimeArray: hourlyTime,
          hourlyIconArray: hourlyIcons,
          hourlyTempArray: hourlyTemp,
          tenDayArray: tenDays,
          tenDayIconArray: tenDayIcons,
          tenDayHiArray: tenDayHis,
          tenDayLowArray: tenDayLows,
          errorMessage: false,
          welcomePage: false,
        });
      }
    });
  }

  render() {
    if (this.state.welcomePage && !this.state.errorMessage) {
      return (
      <section className="fullDisplay">
        <h1>Weatherly</h1>
        <div className="input-container">
          <input id="mainInput"
                 aria-label="enter a zip code or city"
                 type="text"
                 value={ this.state.input }
                 placeholder="Enter your Zip Code or City/State"
                 onChange={ (event) => {
                   this.setState({ input: event.target.value });
                 }}
               />
          <input className="submit-btn"
                 type="submit"
                 onClick={ () => this.handleSubmit()}
               />
        </div>
        <h2>Welcome to weatherly!!  Enter you location above to find the weather.</h2>
        <h3>Don't let the weather catch you off guard!!</h3>
      </section>
    );
    } else if (this.state.errorMessage === true) {
      return (
        <section className="fullDisplay">
          <h1>Weatherly</h1>
          <div className="input-container">
            <input id="mainInput"
                   aria-label="enter a zip code or city"
                   type="text"
                   value={ this.state.input }
                   placeholder="Enter your Zip Code or City/State"
                   onChange={ (event) => {
                     this.setState({ input: event.target.value });
                   }}
                 />
            <input className="submit-btn"
                   type = "submit"
                   onClick = { () => this.handleSubmit()}
                 />
          </div>
          <h2 className='error-message'>{ this.state.errorDisplayMessage }</h2>
          <h2>Welcome to weatherly!!  Enter your location above to find the weather.</h2>
          <h3>Don't let the weather catch you off guard!!</h3>
        </section>
      );
    } else {
      return (
        <section className="fullDisplay">
          <h1>Weatherly</h1>
          <div className="input-container">
            <input id="mainInput"
                   aria-label="enter a zip code or city"
                   type="text"
                   value={ this.state.input }
                   placeholder="Enter your Zip Code or City/State"
                   onChange={ (event) => {
                     this.setState({ input: event.target.value });
                   }}
                 />
            <input className="submit-btn"
                   type="submit"
                   onClick={ () => this.handleSubmit() }
                 />
          </div>
          <div className="current-weather">
            <div className="current-weather-inner-container">
            <div className="current-weather-details">
              <p className="city-name">
                { this.state.cityStateName }
              </p>
              <p className="date-and-time">
                { this.state.weekDay } - { this.state.time }
              </p>
              <p className="weather-condition">
                { this.state.condition }
              </p>
              <p className="current-temp">
                Current Temperature - { this.state.currentTemp }
              </p>
              <p className="today-high">
                Today's Hi: { this.state.hi }
              </p>
              <p className="today-low">
                Today's Low: { this.state.low }
              </p>
            </div>
            <div className="icon-box">
              <img alt="weather icon" src={this.state.weatherIcon}/>
            </div>
          </div>
          </div>
          <div className="summary">
           {this.state.weatherSummary}
          </div>
          <div className="seven-hour">
            <SevenHourDisplay cardTime={ this.state.hourlyTimeArray }
                              cardIcon={ this.state.hourlyIconArray }
                              cardTemp={ this.state.hourlyTempArray }
                            />
          </div>
          <div className="ten-day">
            <TenDayDisplay tenDayCard={ this.state.tenDayArray }
                           tenDayIconCard={ this.state.tenDayIconArray }
                           tenDayHiCard={ this.state.tenDayHiArray }
                           tenDayLowCard={ this.state.tenDayLowArray }
                         />

          </div>
          <h3>Don't let the weather catch you off guard!!</h3>
        </section>
      );
    }
  }
}
