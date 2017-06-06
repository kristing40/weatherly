require('../normalize.css');
require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';
import iconKeysColor from './icon-keys-color.jsx';
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
    const fromLocal = localStorage.getItem('city') ?
      localStorage.getItem('city') : '';

    this.setState({ input: fromLocal });
    if (fromLocal.length) {
      this.getWeather(fromLocal);
    }
  }

  resetInput() {
    localStorage.removeItem('city');
    this.setState({ welcomePage: true });
  }

  handleSubmit() {
    this.getWeather(this.state.input);
    localStorage.setItem('city', this.state.input);
    this.setState({ input: '' });
  }

  getWeather(location) {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${location}.json`, (data) => {
      console.log(data);
      if (data.response.error) {
        const errorDisplay = data.response.error.description;

        this.setState({ errorMessage: true,
                        errorDisplayMessage: errorDisplay,
                        input: '',
                      });
      } else {
        const icon = `./lib/images/${iconKeysColor[data.current_observation.icon]}`;
        const hourlyArray = data.hourly_forecast.slice(0, 7);
        const hourlyTime = hourlyArray.map((hourObject) => {
          return hourObject.FCTTIME.civil;
        });
        const hourlyIcons = hourlyArray.map((hourObject) => {
          return hourObject.icon;
        });
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
          weekDayTime: data.current_observation.observation_time,
          condition: data.current_observation.weather,
          currentTemp: Math.floor(data.current_observation.temp_f),
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
          input: '',
          locationZip: data.current_observation.display_location.zip,
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
                 disabled={ !this.state.input }
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
                   type="submit"
                   disabled={ !this.state.input }
                   onClick={ () => this.handleSubmit()}
                 />
          </div>
          <h2 className='error-message'>{ this.state.errorDisplayMessage }</h2>
          <h2>You done goofed big time!  Enter your location above, but do it right this time.</h2>
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
                   disabled={ !this.state.input }
                   value="Submit"
                   onClick={ () => this.handleSubmit() }
                 />
          </div>
          <div>
            <input className="reset-btn"
                   type="submit"
                   value="Reset"
                   onClick={ () => this.resetInput() }
                 />
          </div>
          <div className="current-weather">
            <div className="current-weather-inner-container">
            <div className="current-weather-details">
              <p className="city-name">
                { this.state.cityStateName }
                <span> - </span>
                { this.state.locationZip }
              </p>
              <p className="date-and-time">
                { this.state.weekDayTime }
              </p>
              <p className="weather-condition">
                Right now it is { this.state.condition }
              </p>
              <p className="current-temp">
                Temperature: { this.state.currentTemp }&#8457;
              </p>
              <p className="today-high">
                Today's Hi: { this.state.hi }&#8457;
              </p>
              <p className="today-low">
                Today's Low: { this.state.low }&#8457;
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
          <p className="forecast-title">7-Hour Forecast</p>
          <div className="seven-hour">
            <SevenHourDisplay cardTime={ this.state.hourlyTimeArray }
                              cardIcon={ this.state.hourlyIconArray }
                              cardTemp={ this.state.hourlyTempArray }
                            />
          </div>
          <p className="forecast-title">10-Day Forecast</p>
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
