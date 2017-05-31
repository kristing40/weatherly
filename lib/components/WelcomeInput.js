import React, { Component } from 'react';

export default class WelcomeInput extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <section>
        <input type='text'
               value= { this.state.input }
               placeholder='Enter your zipcode or City/State' />
      </section>
    )
  }
}
