import React, { Component } from 'react';
import iconKeysColor from './icon-keys-color.jsx';
import $ from 'jquery';

const DayCard = (props) => {
  return (
    <div className="ten-day-weather-card">
      <p className="ten-day-items">{ props.day }</p>
      <div className="icon-card">
        <p className="ten-day-items"><img className="day-icons" alt="weather icon" src={ `./lib/images/${iconKeysColor[props.icon]}` }/></p>
        <p className="ten-day-items">High: { props.high }</p>
        <p className="ten-day-items">Low: { props.low }</p>
      </div>
    </div>
  );
};
export default DayCard;
