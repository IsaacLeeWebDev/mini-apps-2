import React, { Component } from 'react';
import getApiData from '../transport/reactGetRequests.js';
import chart from 'chart.js';
const ctx = document.getElementById('myChart');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
    };
    this.updateDataState = this.updateDataState.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount() {
    console.log('Mounted');
    this.updateDataState();
  }

  updateDataState() {
    console.log('State Setting');
    getApiData(this);
  }

  renderChart() {
    let data = []
    let dates = Object.keys(this.state.apiData);
    for (let i = 0; i < dates.length; i++) {
      data.push({x: new Date(dates[i]), y: this.state.apiData[dates[i]] })
    }
    console.log('Data about to be rendered: ', data);
    if (this.state.apiData) {
      console.log('rendering chart with data @:', ctx);
      return new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                      unit: 'day'
                  }
              }],
              yAxes: [{
                  type: 'linear',
              }]
          }
      }
      });
    } else {
      console.log('no api data');
    }
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.apiData ?
              JSON.stringify(this.state.apiData) :
              'API Data not yet rendered'
          }
        </div>
      </div>
    );
  }
}