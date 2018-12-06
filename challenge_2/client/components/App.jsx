import React, { Component } from 'react';
import getApiData from '../transport/reactGetRequests.js';
// import

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
    };
    this.updateDataState = this.updateDataState.bind(this);
  }

  componentDidMount() {
    console.log('Mounted');
    this.updateDataState();
  }

  updateDataState() {
    console.log('State Setting');
    getApiData(this);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div>
          <canvas id="myChart" width="400" height="400"></canvas>
          {this.state.apiData ? JSON.stringify(this.state.apiData) : 'API Data not yet rendered'}
        </div>
      </div>
    );
  }
}