// Packages
import React, { Component } from 'react';
// Components
import List_Item from './List_Item.jsx';

const List = props => {
  console.log(props.events);
  let i = -1;
  return props.events.map(event => {
    return (<List_Item key={props.pageNum + i++} event={event} />)
  });
}

export default List;