import React, { Component } from 'react';
import DayCard from './DayCard.jsx';


const TenDayDisplay = (props) => {
  let dayCard = props.dayObject.map((object) => {
    let key = Math.ceil(Date.now() * Math.random());
    return <DayCard
      day={object.date.weekday}
      icon={object.icon}
      high={object.high.fahrenheit}
      low={object.low.fahrenheit}
      key={key}
    />
  });

  return (
    <section className="ten-day-display">
      {dayCard}
    </section>
  );
};


export default TenDayDisplay;
