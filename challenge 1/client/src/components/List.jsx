// Packages
import React, { Component } from 'react';
// Components
import List_Item from './List_Item.jsx';

const List = props => {
  let i = -1;
  return props.events.map(event => {
    i++;
    return (<List_Item  key={(props.pageNum - 1) * 10 + i}
                        event={event}
                        id={(props.pageNum - 1) * 10 + i} />)
  });
}

export default List;