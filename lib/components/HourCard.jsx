import React, { Component } from 'react';


const HourCard = (props) => {
  return (
      <div id="weather-card">
          <p className="hour-items">{props.time}</p>
        <div id="icon-card">
          <p className="hour-items"><img src={props.icon}/></p>
          <p className="hour-items">{props.temp}</p>
        </div>
      </div>
    );
};

export default HourCard;
