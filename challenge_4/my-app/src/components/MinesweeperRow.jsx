// eslint-disable-next-line
import React, { Component } from 'react';
import MinesweeperBox from './MinesweeperBox';
import { clickSpace } from '../actions/actions.js';
import { connect } from 'react-redux';

const MineSweeperRow = props => {
  let rowJsx = [];
  for (let i = 0; i < props.spaces.length; i++) {
    rowJsx.push(<MinesweeperBox key={i}
                                board={props.board}
                                rowId={props.rowId}
                                boxId={i}
                                hasBomb={props.spaces[i].hasBomb}
                                adjacentBombs={props.spaces[i].adjacentBombs}
                                discovered={props.spaces[i].discovered} />
                );
  }
  return (
      <div className="MinesweeperRow">
        { rowJsx }
      </div>
    );
};

export default MineSweeperRow;