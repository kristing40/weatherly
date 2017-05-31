require('../style.css');
import $ from 'jquery';
import React, { Component } from 'react';

export default class WelcomeInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      currentPage: 'welcome',
    };
  }

  componentDidMount() {
    if (this.state.input !== '') {
      this.getWeather()
    }
  }

  handleSubmit() {
    this.getWeather()
    this.setState({ currentPage: '' });
  }

  getWeather() {
    $.get('https://api.wunderground.com/api/0f16411ef0ea558e/conditions/forecast10day/hourly/hourly10day/q/CO/Denver.xml', (data) => {
      console.log(data)
    })
  }

  render() {
    if (this.state.currentPage) {
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
