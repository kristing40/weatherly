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
    };
  }

  setLocalStorage() {
    localStorage.setItem('city', this.state.input);
    this.setState({ input: '' });
  }

  autoComplete() {
    if (this.state.input) {
      const autoArray = autoCompleter.suggest(this.state.input);
      return this.suggestList(autoArray);
    }
    return true;
  }

  suggestList(city) {
    let options = city.map((element) => {
      let key = Math.ceil(Date.now() * Math.random());
      return <option className="drop-down" value={element} key={key} />;
    }).slice(0, 10);
    return (
      <datalist id="cities" size="45">
        {options}
      </datalist>
    );
  }

  searchAndClearSubmit() {
    this.props.submitHandler(this.state.input);
    this.setLocalStorage();
  }

  render() {
    return (
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
          <button
            className="submit-btn"
            disabled={!this.state.input}
            onClick={this.searchAndClearSubmit.bind(this)}
          >Submit</button>
        </div>
      </section>
    );
  }
}
