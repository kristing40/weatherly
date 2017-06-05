import React,  { Component } from 'react';
import iconKeysColor from './icon-keys-color.jsx';
import $ from 'jquery';


const HourCard = (props) => {
  return (
      <div className="weather-card">
          <p className="hour-items">{props.time}</p>
        <div className="icon-card">
          <p className="hour-items">
            <img className="hour-icons"
                 alt="weather icon" src={`./lib/images/${iconKeysColor[props.icon]}`}/>
          </p>
          <p className="hour-temp-text">Temp</p>
          <p className="hour-temp">{props.temp}</p>
        </div>
      </div>
    );
};

export default HourCard;
