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
      console.log(data)
    })
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
        <section>
          Hello!
        </section>
      );
    }
  }
}
