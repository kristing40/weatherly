import React, { Component } from 'react';


const DayCard = (props) => {
  return (
    <div id="ten-day-weather-card">
      <p className="ten-day-items">{props.day}</p>
      <div id="icon-card">
        <p className="ten-day-items"><img src={props.icon}/></p>
        <p className="ten-day-items">High: {props.high}</p>
        <p className="ten-day-items">Low: {props.low}</p>
      </div>
    </div>
  );
};
export default DayCard;
