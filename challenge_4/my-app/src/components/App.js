import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to <code> Minesweeper </code>
          </p>
        </header>
        <p>Hello world</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    examplePropOne: state.examplePropOne,
    examplePropOne: state.examplePropTwo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ exampleAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
