import React,  { Component } from 'react';


const HourCard = ({temp, hour, hourlyIcon}) => {
  return (
      <div id="weather-card">
          <p class="hour-items">{'30'}</p>
        <div id="icon-card">
          <p class="hour-items">{'Gello!'}</p>
          <p class="hour-items">{'55'}</p>
        </div>
      </div>
    );
};

export default HourCard;
