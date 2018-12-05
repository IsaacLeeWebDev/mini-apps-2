// Packages
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
// Components
import List from './List.jsx';
import Search_Bar from './Search_Bar.jsx';
// Helpers
import req from '../transport/react-requests.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageNum: 0,
      totalPages: 0,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getRecordsByPage = req.getRecordsByPage.bind(this);
    this.getTotalPages = req.getTotalPages.bind(this);
  }

  handlePageChange(pageTurns) {
    console.log(this.getRecordsByPage);
    this.getRecordsByPage(this, this.state.pageNum + pageTurns);
    this.getTotalPages(this);
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