import React,  { Component } from 'react';


const HourCard = (props) => {
  return (
      <div id="weather-card">
          <p class="hour-items">{props.time}</p>
        <div id="icon-card">
          <p class="hour-items"><img src={props.icon}/></p>
          <p class="hour-items">{props.temp}</p>
        </div>
      </div>
    );
};

export default HourCard;
