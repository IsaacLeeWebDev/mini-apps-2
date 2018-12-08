import React, { Component } from 'react';
import NumPicker from './NumPicker.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      pins: [true, true, true, true, true, true, true, true, true, true],
      pinsLeft: 10,
      totalScore: 0,
      throws: [],
      spare: false,
      strike: false,
      double: false,
    };
    this.bowl = this.bowl.bind(this);
    this.calculateTotalScore = this.calculateTotalScore.bind(this);
  }

  calculateTotalScore(newThrowsArray) {
    if (newThrowsArray.length > 0) {
      let newTotalScore = 0;
      for (let i = 0; i < newThrowsArray.length; i++) {
          newTotalScore += newThrowsArray[i];
      }
      return newTotalScore;
    } else {
      return 0
    }
  }

  bowl(numPins) {
    let newScore = 0;
    let newPins = this.state.pins.slice();
    let newThrows = this.state.throws;
    let throwNumber = this.state.throws.length % 2 + 1;
    // knock over numPins random pins
    while(newScore < numPins && !allPinsDown) {
      let randomIndex = Math.floor(Math.random() * 10);
      if (newPins[randomIndex]) {
        newPins[randomIndex] = false;
        newScore++;
      }
    }
    let allPinsDown = newPins.filter(pin => pin ? true : false).length === 0;
    // set the pins array to the mutated array with the random pins knocked over
    this.setState({ pins: newPins });

    // if the game hasn't ended already
    if (newThrows.length < 20 || (newThrows.length < 22 && (this.state.double || this.state.strike || this.state.spare))) {
      newThrows.push(newScore); // push score to throws

      // add any bonus points scored by this throw to previous throws
      if (this.state.spare) {
        newThrows[newThrows.length - 2] += newScore;
        this.setState({spare: false})
      }

      if (this.state.strike) {
        newThrows[newThrows.length - 4] += newScore;
        if (throwNumber === 2) {
          this.setState({strike: false})
        }
        if(this.state.double) {
          if (throwNumber === 2) {
            newThrows[newThrows.length - 6] += newScore
          }
        }
      }
      if (allPinsDown) {
        if (throwNumber === 1) {
          if (this.state.strike) {
            this.setState({ double: true });
          }
          this.setState({ strike: true });
        } else {
          this.setState({ spare: true });
        }
      }

      // if there were still pins at the end of the throw

      if (newScore === 10 && this.state.throws.length < 19) {
        newThrows.push(0);
      }
      // update the score tracker
      let newTotalScore = this.calculateTotalScore(newThrows);
      this.setState({
        totalScore: newTotalScore,
        throws: newThrows
      });

      // reset the pins after second throws or strikes
      if (throwNumber === 2 || allPinsDown) {
        this.setState({ pins:[true, true, true, true, true, true, true, true, true, true] });
      }
    // alert the user when the game has ended
    } else {
      alert('game over!');
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
          Score: {this.state.totalScore}
        </div>
        <div>
          throw:
          {
            this.state.throws.length % 2 + 1
          }
        </div>
        <div>
          frame: {
            this.state.throws.length
              ? Math.floor(this.state.throws.length / 2) + 1
              : 1
          }
        </div>
        <div>
          throws: {JSON.stringify(this.state.throws)}
        </div>
        <div>
          total throws: {JSON.stringify(this.state.throws.length)}
        </div>
        <div>
          spare active: {String(this.state.spare)}
        </div>
        <div>
          strike active: {String(this.state.strike)}
        </div>
        <div>
          double active: {String(this.state.double)}
        </div>
      </div>
    );
  }
}