import React, { Component } from 'react';
import Datepicker_Option from './Datepicker_Option.jsx';

const Datepicker = props => (
  <select onChange={(event) => props.update(event.target.value)}>
    {props.dates.map(date => <Datepicker_Option date={date} />)}
  </select>
);

export default Datepicker;