import React, { Component } from 'react';
import HourCard from './HourCard.jsx';


const SevenHourDisplay = (props) => {
  let timeCard = props.hourlyObject.map((object) => {
    console.log(object);
    let key = Math.ceil(Date.now() * Math.random());
    return <HourCard time={object.FCTTIME.civil} icon={object.icon} temp={object.temp.english} key={key} />
  })

  return (
    <section className="seven-hour-display">
      {timeCard}
    </section>
  );
};

export default SevenHourDisplay;
