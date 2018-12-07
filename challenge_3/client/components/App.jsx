import React, { Component } from 'react';
import NumPicker from './NumPicker.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      pins: ['pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin'],
      pinsLeft: 10,
      round: 0,
      frame: 0,
      bonusFrames: 0,
    };
    this.bowl = this.bowl.bind(this)
  }

  bowl(numPins) {
    let i = 0;
    let newPins = this.state.pins.slice();
    let newScore = this.state.score;
    while(i < numPins && newPins.filter(pin => pin ? true : false).length > 0) {
      let randomIndex = Math.floor(Math.random() * 10)
      if (newPins[randomIndex]) {
        newPins[randomIndex] = false;
        newScore++;
        i++;
      }
    }
    this.setState({pins: newPins});
    this.setState({score: newScore});
    if (this.state.frame === 0) {
      this.setState({frame: 1});
    } else if (this.state.frame < 10) {
      this.setState({pins: ['pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin', 'pin']})
      this.setState({round: this.state.round + 1, frame: 0})
    } else {
      alert('game over!')
    }
  }

  render() {
    let pins = this.state.pins;
    return (
      <div>
        <div>
          {String(pins[0])}
        </div>
        <div>
          {String(pins.slice(1,3))}
        </div>
        <div>
          {String(pins.slice(3,6))}
        </div>
        <div>
          {String(pins.slice(6,10))}
        </div>
        <NumPicker bowl={this.bowl} pinsLeft={this.state.pinsLeft} />
        <div>
          Score: {this.state.score}
        </div>
        <div>
          frame: {this.state.frame}
        </div>
        <div>
          round: {this.state.round}
        </div>
      </div>
    );
  }
}