import React, { Component } from 'react';
import HourCard from './HourCard';


const SevenHourDisplay = (props) => {

    return (

      <section id="seven-hour-display">
        <HourCard time={props.cardTime[0]} icon={props.cardIcon[0]} temp={props.cardTemp[0]}/>
        <HourCard time={props.cardTime[1]} icon={props.cardIcon[1]} temp={props.cardTemp[1]}/>
        <HourCard time={props.cardTime[2]} icon={props.cardIcon[2]} temp={props.cardTemp[2]}/>
        <HourCard time={props.cardTime[3]} icon={props.cardIcon[3]} temp={props.cardTemp[3]}/>
        <HourCard time={props.cardTime[4]} icon={props.cardIcon[4]} temp={props.cardTemp[4]}/>
        <HourCard time={props.cardTime[5]} icon={props.cardIcon[5]} temp={props.cardTemp[5]}/>
        <HourCard time={props.cardTime[6]} icon={props.cardIcon[6]} temp={props.cardTemp[6]}/>
      </section>



    );
 }

export default SevenHourDisplay;
