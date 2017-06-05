require('../normalize.css');
require('../style.css');
import React, { Component } from 'react';
import WelcomeInput from './WelcomeInput.jsx';

const Main = () => {
  return (
    <section>
      <WelcomeInput/>
    </section>
  );
};

export default Main;
