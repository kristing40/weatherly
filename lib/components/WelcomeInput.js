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
    if (this.state.input !== '') {
      this.getWeather()
    }
  }

  handleSubmit() {
    this.getWeather()
    this.setState({ welcomePage: false });
    console.log(apiKey);
  }


  getWeather() {
    $.get(`https://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/hourly10day/q/CO/Denver.json`, (data) => {
      // console.log(data.current_observation.display_location.city)
        console.log(data)
      this.setState({ cityStateName: data.current_observation.display_location.full,
                    weekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
                    time: data.forecast.txt_forecast.date,
                    condition: data.current_observation.icon,
                    currentTemp: data.current_observation.feelslike_string,
                    hi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
                    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
                    weatherIcon: data.current_observation.icon_url,
                    weatherSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
      })
    });
  }

  render() {
    if (this.state.welcomePage) {
      return (
      <section>
        <input type = 'text'
               value = { this.state.input }
               placeholder = 'Enter your zipcode or City/State'
               onChange = {(event) => {
                 this.setState({ input: event.target.value });
               }}/>
               <input id = 'submit-btn' type = 'submit' onClick = { () => this.handleSubmit()}/>
      </section>
    );
    } else {
      return (
        <section id="fullDisplay">
          <div id="currentWeather">
             {this.state.cityStateName}
             {this.state.weekDay}
             {this.state.time}
             {this.state.condition}
             {this.state.currentTemp}
             {this.state.hi}
             {this.state.low}
             {this.state.weatherIcon}
          </div>
          <div id="summary">
           {this.state.weatherSummary}
         </div>
         {/* <div id="sevenHour"></div>
         <div id="tenDay"></div> */}
        </section>

      );
    }
  }
}
