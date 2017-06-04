import React, { Component } from 'react';


const HourCard = (props) => {
  return (
      <div className="weather-card">
          <p className="hour-items">{props.time}</p>
        <div className="icon-card">
          <p className="hour-items"><img alt="weather icon" src={props.icon}/></p>
          <p className="hour-items">{props.temp}</p>
        </div>
      </div>
    );
};

export default HourCard;
