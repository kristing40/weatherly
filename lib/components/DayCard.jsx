import React, { Component } from 'react';


const DayCard = (props) => {
  return (
    <div id="ten-day-weather-card">
        <p class="ten-day-items">{props.day}</p>
      <div id="icon-card">
        <p class="ten-day-items"><img src={props.icon}/></p>
        <p class="ten-day-items">{props.high}</p>
        <p class="ten-day-items">{props.Low}</p>
      </div>
    </div>
  );
};
export default DayCard;
