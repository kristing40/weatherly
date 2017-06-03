import React, { Component } from 'react';
import WelcomeInput from './WelcomeInput';
import HourCard from './HourCard';


const SevenHourDisplay = ({ hour, icon, temp}) => {
    return (

      <section id="seven-hour-display">
        <HourCard/>
        <HourCard/>
        <HourCard/>
        <HourCard/>
        <HourCard/>
        <HourCard/>
        <HourCard/>

        {/* { for (let i=0; i<=7; i++) {
            <HourCard/>
          }
        } */}

      </section>



    );
 }

export default SevenHourDisplay;
