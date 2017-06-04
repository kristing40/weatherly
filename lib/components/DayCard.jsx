import React, { Component } from 'react';


const DayCard = (props) => {
  return (
    <div className="ten-day-weather-card">
      <p className="ten-day-items">{props.day}</p>
      <div className="icon-card">
        <p className="ten-day-items"><img alt="weather icon" src={props.icon}/></p>
        <p className="ten-day-items">High: {props.high}</p>
        <p className="ten-day-items">Low: {props.low}</p>
      </div>
    </div>
  );
};
export default DayCard;
