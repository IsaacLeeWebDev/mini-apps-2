import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import getRecords from '../transport/app.js';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
      recordsMaxIndex: 9,
    };
  }

  handleProgressPage(records) {
    getRecords(this.state.maxIndex);
  }

  render() {
    <div>
      <List records={this.state.records} />
      <ReactPaginate   previousLabel={"previous"}
                       nextLabel={"next"}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
    </div>
  }
}