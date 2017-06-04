import React, { Component } from 'react';
import iconKeys from './icon-keys';
import $ from 'jquery';

const DayCard = (props) => {
  return (
    <div className="ten-day-weather-card">
      <p className="ten-day-items">{props.day}</p>
      <div className="icon-card">
        <p className="ten-day-items"><img className="day-icons" alt="weather icon" src={`./lib/images/${iconKeys[props.icon]}`}/></p>
        <p className="ten-day-items">High: {props.hi}</p>
        <p className="ten-day-items">Low: {props.low}</p>
      </div>
    </div>
  );
};
export default DayCard;
