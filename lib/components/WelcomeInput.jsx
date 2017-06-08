require('../normalize.css');
require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';
import iconKeysColor from './icon-keys-color.jsx';
import SevenHourDisplay from './SevenHourDisplay.jsx';
import TenDayDisplay from './TenDayDisplay.jsx';
import Search from './Search.jsx';
import { Node, Trie } from '../../node_modules/@noetic97/npm-complete-me-jh/index.js';

import cityList from './cityList';

const autoCompleter = new Trie();

autoCompleter.populate(cityList.data);

export default class WelcomeInput extends Component {
  constructor() {
    super();
    this.state = {
      welcomePage: true,
      errorMessage: false,
    };
  }

  componentDidMount() {
    const fromLocal = localStorage.getItem('city') ?
      localStorage.getItem('city') : '';
    if (fromLocal.length) {
      this.getWeather(fromLocal);
    }
  }

  setLocalStorage() {
    localStorage.setItem('city', this.state.input);
    this.setState({ input: '' });
  }

  getWeather(location) {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/${location}.json`, (data) => {
      if (data.response.error || data.response.results) {
        const errorDisplay = 'No cities match your search query';

        this.setState({ errorMessage: true,
                        errorDisplayMessage: errorDisplay,
                      });
      } else {
        const icon = `./lib/images/${iconKeysColor[data.current_observation.icon]}`;
        const hourlyArray = data.hourly_forecast.slice(0, 7);
        const tenDayArray = data.forecast.simpleforecast.forecastday;

        this.setState({ cityStateName: data.current_observation.display_location.full,
          weekDayTime: data.current_observation.observation_time,
          condition: data.current_observation.weather,
          currentTemp: Math.floor(data.current_observation.temp_f),
          hi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          weatherIcon: icon,
          weatherSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
          hourlyObject: hourlyArray,
          dayObject: tenDayArray,
          errorMessage: false,
          welcomePage: false,
          locationZip: data.current_observation.display_location.zip,
        });
      }
    });
  }

  submitLocation(location) {
    this.getWeather(location);
  }

  resetInput() {
    localStorage.removeItem('city');
    this.setState({ welcomePage: true });
  }

  render() {
    if (this.state.welcomePage && !this.state.errorMessage) {
      return (
        <section className="fullDisplay">
          <Search submitHandler={this.submitLocation.bind(this)} />
          <h2>Welcome to weatherly!!  Enter you location above to find the weather.</h2>
          <h3>Don't let the weather catch you off guard!!</h3>
        </section>
    );
    } else if (this.state.errorMessage) {
      return (
        <section className="fullDisplay">
          <Search submitHandler={this.submitLocation.bind(this)} />
          <h2 className="error-message">{this.state.errorDisplayMessage}</h2>
          <h2>You done goofed big time!  Enter your location above, but do it right this time.</h2>
          <h3>Don't let the weather catch you off guard!!</h3>
        </section>
      );
    } else {
      console.log(this.state.hourlyObject)
      return (
        <section className="fullDisplay">
          <Search submitHandler={this.submitLocation.bind(this)} />
          <div>
            <button
              className="reset-btn"
              onClick={() => this.resetInput()}
            >Reset</button>
          </div>
          <div className="current-weather">
            <div className="current-weather-inner-container">
              <div className="current-weather-details">
                <p className="city-name">
                  {this.state.cityStateName}
                  <span> - </span>
                  {this.state.locationZip}
                </p>
                <p className="date-and-time">
                  {this.state.weekDayTime}
                </p>
                <p className="weather-condition">
                  Right now it is {this.state.condition}
                </p>
                <p className="current-temp">
                  Temperature: {this.state.currentTemp}&#8457;
                </p>
                <p className="today-high">
                  Today's Hi: {this.state.hi}&#8457;
                </p>
                <p className="today-low">
                  Today's Low: {this.state.low}&#8457;
                </p>
              </div>
              <div className="icon-box">
                <img alt="weather icon" src={this.state.weatherIcon} />
              </div>
            </div>
          </div>
          <div className="summary">
           {this.state.weatherSummary}
          </div>
          <p className="forecast-title">7-Hour Forecast</p>
          <div className="seven-hour">
            <SevenHourDisplay
              hourlyObject={this.state.hourlyObject}
            />
          </div>
          <p className="forecast-title">10-Day Forecast</p>
          <div className="ten-day">
            <TenDayDisplay
              dayObject={this.state.dayObject}
            />
          </div>
          <h3>Don't let the weather catch you off guard!!</h3>
        </section>
      );
    }
  }
}
