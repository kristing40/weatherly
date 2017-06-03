import React, { Component } from 'react';
import WelcomeInput from './WelcomeInput'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <WelcomeInput/>
      </section>
    );
  }
}
