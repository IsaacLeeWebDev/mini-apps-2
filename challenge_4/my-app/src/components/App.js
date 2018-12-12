// eslint-disable-next-line
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.css';
import MinesweeperRow from './MinesweeperRow.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render () {
    let boardJsx = [];
    console.log('App props:', this.props);
      for (let i = 0; i < this.props.board.spaces.length; i++) {
        boardJsx.push(
          <MinesweeperRow key={i}
                          board={this.props.board}
                          spaces={this.props.board.spaces[i]}
                          rowId={i} />);
    }
      return (
        <div className="App">
          { boardJsx }
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    board: state.state,
  };
};

export default connect(mapStateToProps)(App);
