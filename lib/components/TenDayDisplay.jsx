import React, { Component } from 'react';
import DayCard from './DayCard';


const TenDayDisplay = (props) => {

    return (
      <section id="ten-hour-display">
        <DayCard day={props.tenDayCard[0]} icon={props.tenDayIconCard[0]} high={props.tenDayHiCard[0]} low={props.tenDayLowCard[0]}/>
        <DayCard day={props.tenDayCard[1]} icon={props.tenDayIconCard[1]} high={props.tenDayHiCard[1]} low={props.tenDayLowCard[1]}/>
        <DayCard day={props.tenDayCard[2]} icon={props.tenDayIconCard[2]} high={props.tenDayHiCard[2]} low={props.tenDayLowCard[2]}/>
        <DayCard day={props.tenDayCard[3]} icon={props.tenDayIconCard[3]} high={props.tenDayHiCard[3]} low={props.tenDayLowCard[3]}/>
        <DayCard day={props.tenDayCard[4]} icon={props.tenDayIconCard[4]} high={props.tenDayHiCard[4]} low={props.tenDayLowCard[4]}/>
        <DayCard day={props.tenDayCard[5]} icon={props.tenDayIconCard[5]} high={props.tenDayHiCard[5]} low={props.tenDayLowCard[5]}/>
        <DayCard day={props.tenDayCard[6]} icon={props.tenDayIconCard[6]} high={props.tenDayHiCard[6]} low={props.tenDayLowCard[6]}/>
        <DayCard day={props.tenDayCard[7]} icon={props.tenDayIconCard[7]} high={props.tenDayHiCard[7]} low={props.tenDayLowCard[7]}/>
        <DayCard day={props.tenDayCard[8]} icon={props.tenDayIconCard[8]} high={props.tenDayHiCard[8]} low={props.tenDayLowCard[8]}/>
        <DayCard day={props.tenDayCard[9]} icon={props.tenDayIconCard[9]} high={props.tenDayHiCard[9]} low={props.tenDayLowCard[9]}/>
      </section>

    );
 }

export default TenDayDisplay;
