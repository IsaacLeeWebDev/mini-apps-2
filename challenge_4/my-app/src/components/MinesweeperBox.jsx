// eslint-disable-next-line
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions.js';
import { connect } from 'react-redux';

const MinesweeperBox = props => {
  const boxStyle = {
    backgroundColor: props.discovered ? 'blue' : 'white',
  };
  if (props.hasBomb) {
    return (<span className="MinesweeperBox bomb"
                  onClick={() => }> B </span>);
  } else if (props.adjacentBombs) {
    return (<span className="MinesweeperBox adj"> { props.adjacentBombs } </span>);
  } else {
    return (<span className="MinesweeperBox "> N </span>)
  }
};

const mapDispatchToProps = (dispatch, props) => {
  console.log('mapDispatchToProps called');
  return bindActionCreators({
  // Pass the blog post ID to the action creator automatically, so
  // the wrapped blog post component can simply call `props.clickSpace()`:
  handleClickSpace: () => {
    console.log('handleClickSpace called');
    actions.handleClickSpace(props.board, props.rowId, props.boxId)
  },
}, dispatch)
}

export default connect(null, mapDispatchToProps)(MinesweeperBox);

/*const mapStateToProps = (state) => {
  return {
    board: state.board,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clickSpace }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);*/