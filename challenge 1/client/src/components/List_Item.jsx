import React, { Component } from 'react';

const List_Item = props => (
  <div>
    <p> {JSON.stringify(props.event)} </p>
    <div>
      <button   onClick={() => alert('Feature not yet implemented')}>
        edit this event
      </button>
      <button   onClick={() => alert('Feature not yet implemented')}>
        favorite this event
      </button>
    </div>
  </div>
)

export default List_Item;