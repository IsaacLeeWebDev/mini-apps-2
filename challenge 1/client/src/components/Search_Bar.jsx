// Packages
import React, { Component } from 'react';
// Components

// Helpers
import req from '../transport/react-requests.jsx';

export default class Search_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
  }

  handleSearchQueryChange(event) {
    console.log('target: ', event.target, 'value: ', event.target.value);
    this.setState({query: event.target.value})

  }

  render() {
    return (
      <input
        onChange={(event) => this.handleSearchQueryChange(event)}
        placeholder={'Search...'}/>
    );
  }
}