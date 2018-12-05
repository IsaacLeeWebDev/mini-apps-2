import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
  }

  handleSearchQueryChange(event) {
    this.setState({query: event.target.value})
  }

  render() {
    return (
      <input
        onChange={(event) => this.handleSearchQueryChange}
        placeholder={'Search...'}/>
    );
  }
}