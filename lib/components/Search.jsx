require('../normalize.css');
require('../style.css');
import apiKey from '../../apiKey';
import $ from 'jquery';
import React, { Component } from 'react';
import iconKeysColor from './icon-keys-color.jsx';
import { Node, Trie } from '../../node_modules/@noetic97/npm-complete-me-jh/index.js';

import cityList from './cityList';

const autoCompleter = new Trie();

autoCompleter.populate(cityList.data);
export default class Search extends Component {
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

  autoComplete() {
    if (this.state.input) {
      const autoArray = autoCompleter.suggest(this.state.input);
      return this.suggestList(autoArray);
    }
    return true;
  }

  render() {
    return(
      <section className="fullDisplay">
        <h1>Weatherly</h1>
        <div className="input-container">
          <input
            id="mainInput"
            aria-label="enter a zip code or city"
            type="text"
            value={this.state.input}
            placeholder="Enter your Zip Code or City/State"
            list="cities"
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
          />
          <div>
            {this.autoComplete(this.state.input)}
          </div>
          <input
            className="submit-btn"
            type="submit"
            disabled={!this.state.input}
            onClick={() => this.handleSubmit()}
          />
        </div>
        <div>
          <input
            className="reset-btn"
            type="submit"
            value="Reset"
            onClick={() => this.resetInput()}
          />
        </div>
        <h2>Welcome to weatherly!!  Enter you location above to find the weather.</h2>
        <h3>Don't let the weather catch you off guard!!</h3>
      </section>
    )
  }
}
