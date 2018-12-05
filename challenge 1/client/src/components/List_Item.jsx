import React, { Component } from 'react';

const List_Item = props => (
  <div>
    <p>{JSON.stringify(props.record)}</p>
    <a
      onClick={() => alert('Feature not yet implemented')}
    >
    edit this record
    </a>
    <a
      onClick={() => alert('Feature not yet implemented')}
    >
    favorite this record
    </a>
  </div>
)

export default List_Item;