require('../style.css');
import React, { Component } from 'react';

export default class WelcomeInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      currentPage: 'welcome',
    };
  }

  handleSubmit() {
    this.setState({ currentPage: '' });
  }

  render() {
    if (this.state.currentPage === 'welcome') {
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


          Hldjflsaj;fldjfl!!!!
        </section>
      );
    }
  }
}
