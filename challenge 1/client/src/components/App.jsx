// Packages
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
// Components
import List from './List.jsx';
import Search_Bar from './Search_Bar.jsx';
// Helpers
import getEvents from '../transport/react-requests.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageNum: 0,
      totalPages: Math.floor(count / 10) + (count % 10 !== 0 ? 1 : 0),
      query: '',
    };
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getEvents = getEvents.bind(this);
  }

  handlePageChange(pageTurns) {
    console.log(this.getEvents);
    this.getEvents(this, null, this.state.pageNum + pageTurns);
  }

  handleSearchQueryChange(event) {
    console.log('target: ', event.target, 'value: ', event.target.value);
    this.setState({query: event.target.value})
  }

  componentDidMount() {
    this.handlePageChange(1);
  }


  render() {
    return (
      <div>
        <Search_Bar />
        <List events={this.state.events} pageNum={this.state.pageNum} />
        <ReactPaginate   previousLabel={"previous"}
                         nextLabel={"next"}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
      </div>
    );
  }
}