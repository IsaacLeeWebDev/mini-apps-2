import React, { Component } from 'react';
import NumPickerOption from './NumPickerOption.jsx';

const NumPicker = props => {
  let optionsJSX = []
  for (let i = 1; i <= props.pinsLeft; i++) {
    optionsJSX.push(<NumPickerOption num={i} key={i} bowl={() => props.bowl(i)} />)
  }
  return (
    <div>
      {optionsJSX}
    </div>
  );
}
export default NumPicker;