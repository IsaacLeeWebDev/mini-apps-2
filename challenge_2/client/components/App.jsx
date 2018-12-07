import React, { Component } from 'react';
import getApiData from '../transport/reactGetRequests.js';
import chart from 'chart.js';
import Datepicker from './Datepicker.jsx';
import sf, { sprintf } from 'sprintf-js';
import btcCache from '../../btcCache.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
      initApiData: btcCache,
      startDate: this.props.beginningOfTimeStr,
      endDate: this.props.todayStr,
    };
    this.getDateRange = this.getDateRange.bind(this);
    this.updateDataState = this.updateDataState.bind(this);
    this.renderChart = this.renderChart.bind(this);
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
  }

  componentDidMount() {
    console.log('Mounted');
    this.getDateRange();
  }

  getDateRange() {
    getApiData(this, this.props.beginningOfTimeStr, this.props.todayStr, true);
  }

  updateDataState() {
    console.log('State Setting');
    if (new Date(this.state.startDate).getTime() <= new Date(this.state.startDate).getTime()) {
      getApiData(this, this.state.startDate, this.state.endDate);
    } else {
      console.log(this.state.startDate, this.state.endDate);
      alert('Please input a valid date range');
    }
  }

  renderChart() {
    let data = []
    let dates = Object.keys(this.state.apiData);
    let ctx = document.getElementById('myChart');
    for (let i = 0; i < dates.length; i++) {
      data.push({x: dates[i], y: this.state.apiData[dates[i]] })
    }
    var labels = []
    for (let i = 0; i < dates.length; i++) {
      if (i % Math.ceil(dates.length / 51) === 0) {
        labels.push(dates[i]);
      }
    }
    console.log('Data about to be rendered: ', data);
    if (this.state.apiData) {
      console.log('rendering chart with data @:', ctx);
      return new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Bitcoin prices over time (USD)',
            data: data,
            backgroundColor: 'rgba(1,0,0,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
            lineTension: 0,
            height: '1000px',
          }],
        },
        options: {
          scales: {
              xAxes: [{
                  type: 'time',
                  distribution: 'series',
                  time: {
                      unit: 'month',
                  },
                  display: true,
                  ticks: {
                    source: 'labels',
                  },
              }],
              yAxes: [{
                  type: 'linear',
                  scaleLabel: {
                    display: true,
                    labelStirng: 'Closing Price (USD)',
                  }
              }]
          }
      }
      });
    } else {
      console.log('no api data');
    }
  }

  updateStartDate(dateStr) {
    console.log('dateStr:', dateStr);
    this.setState({startDate: dateStr});
    setTimeout(() => this.updateDataState(this, this.state.startDate, this.state.endDate), 0);
  }

  updateEndDate(dateStr) {
    console.log('dateStr:', dateStr);
    this.setState({endDate: dateStr});
    setTimeout(() => this.updateDataState(this, this.state.startDate, this.state.endDate), 0);
  }

  render() {
    return (
      <div>
        <canvas id="myChart" width="" height="95%"></canvas>
        <div> start date </div>
        <Datepicker update={this.updateStartDate} selected={this.state.startDate} dates={Object.keys(this.state.initApiData)}/>
        <div> end date </div>
        <Datepicker update={this.updateEndDate} selected={this.state.endDate} dates={Object.keys(this.state.initApiData)}/>
        <div>
          Powered By <a href="https://www.coindesk.com/price/">CoinDesk</a>
        </div>
      </div>
    );
  }
}