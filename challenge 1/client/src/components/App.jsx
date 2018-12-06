// Packages
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
// Components
import List from './List.jsx';
import Search_Bar from './Search_Bar.jsx';
// Helpers
import getEvents from '../transport/getEvents.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events        : []  ,
      pageNum       : 0   ,
      totalEvents   : 0   ,
      query         : ''  ,
    };
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
  }

  componentDidMount() {
    this.handlePageChange(1);
  }

  handlePageChange(pageTurns) {
    getEvents(this, this.state.query, this.state.pageNum + pageTurns);
  }

  handlePageClick(data) {
    console.log(data.selected + 1);
    getEvents(this, this.state.query, data.selected + 1);
  }

  handleSearchQueryChange(value) {
    this.setState({query: value})
  }

  handleQuerySubmit(keyCode) {
    if (keyCode == 13) {
      this.handlePageChange(this, this.state.query);
    }
  }

  render() {
    return (
      <div>
        <Search_Bar handleSearchQueryChange={this.handleSearchQueryChange}
                    handleQuerySubmit={this.handleQuerySubmit} />
        <List events={this.state.events}
              pageNum={this.state.pageNum} />
        <ReactPaginate   previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={"..."}
                         breakClassName={"break-me"}
                         pageCount={Math.ceil(this.state.totalEvents / 10)}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         onPageChange={this.handlePageClick}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
      </div>
    );
  }
}