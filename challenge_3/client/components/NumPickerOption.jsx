import React, { Component } from 'react';

const NumPickerOption = props => (
  <button onClick={props.bowl}>{props.num}</button>
);

export default NumPickerOption;