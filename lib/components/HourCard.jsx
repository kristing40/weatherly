import React,  { Component } from 'react';
import iconKeys from './icon-keys';
import $ from 'jquery';


const HourCard = (props) => {
  return (
      <div className="weather-card">
          <p className="hour-items">{props.time}</p>
        <div className="icon-card">
          <p className="hour-items"><img className="hour-icons" alt="weather icon" src={`./lib/images/${iconKeys[props.icon]}`}/></p>
          <p className="hour-items">{props.temp}</p>
        </div>
      </div>
    );
};

export default HourCard;
