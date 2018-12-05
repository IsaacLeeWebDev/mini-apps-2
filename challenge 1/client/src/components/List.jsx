import React, { Component } from 'react';
import List_Item from 'List_Item.jsx';

const List = props => {
  return props.records.map(record => <List_Item record={record} />);
}

export default List;