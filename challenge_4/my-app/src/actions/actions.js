export const handleClickSpace = (board, x, y) => {
  console.log('handleClickSpace action called');
  return (
    {
      type: 'CLICK-SPACE',
      payload: clickSpace(board, x, y),
    }
  );
}

export const handleCreateBoard = () => (
  {
    type: 'CREATE-BOARD'
  }
);


export const clickSpace = (board, x, y) => {
  let updatedBoardSpaces = board.spaces;
  updatedBoardSpaces[y][x].discovered = true;
  if (updatedBoardSpaces[y][x].hasBomb) {
    alert('Game over!!!!!!!!!!!!');
  } else if (updatedBoardSpaces[y][x].adjacentBombs) {
    updatedBoardSpaces[y][x].discovered = true;
  } else {
    updatedBoardSpaces[y][x].discovered = true;
    if (board.spaces[y][x - 1]) {
      clickSpace(board, y, x - 1);
    }
    if (board.spaces[y][x + 1]) {
      clickSpace(board, y, x + 1);
    }
    if (board.spaces[y - 1]) {
      if (board.spaces[y - 1][x]) {
        clickSpace(board, y - 1, x)
      }
      if (board.spaces[y - 1][x - 1]) {
        clickSpace(board, y - 1, x - 1);
      }
      if (board.spaces[y - 1][x + 1]) {
        clickSpace(board, y - 1, x + 1);
      }
    }
    if (board.spaces[y + 1]) {
      if (board.spaces[y + 1][x]) {
        clickSpace(board, y + 1, x);
      }
      if (board.spaces[y + 1][x + 1]) {
        clickSpace(board, y + 1, x + 1);
      }
      if (board.spaces[y + 1][x - 1]) {
        clickSpace(board, y + 1, x - 1);
      }
    }
  }
  return board;
};


export const createBoard = (length, width, bombs) => {
  let board = {
    spaces: [],
    bombsLeft: bombs,
  };
  for (let i = 0; i < length; i++) {
    board.spaces.push([]);
    for(let j = 0; j < width; j++) {
      board.spaces[i].push({
        hasBomb: false,
        adjacentBombs: 0,
        discovered: false,
      });
    }
  }

  let randomX;
  let randomY;
  while (bombs > 0) {
    randomX = Math.floor(Math.random() * (width - 1));
    randomY = Math.floor(Math.random() * (length - 1));
    if (!board.spaces[randomY][randomX].hasBomb) {
      board.spaces[randomY][randomX].hasBomb = true;
      if (board.spaces[randomY][randomX - 1]) {
          board.spaces[randomY][randomX - 1].adjacentBombs += 1;
      }
      if (board.spaces[randomY][randomX + 1]) {
          board.spaces[randomY][randomX + 1].adjacentBombs += 1;
      }
      if (board.spaces[randomY - 1]) {
        if (board.spaces[randomY - 1][randomX]) {
            board.spaces[randomY - 1][randomX].adjacentBombs += 1
        }
        if (board.spaces[randomY - 1][randomX - 1]) {
            board.spaces[randomY - 1][randomX - 1].adjacentBombs += 1;
        }
        if (board.spaces[randomY - 1][randomX + 1]) {
            board.spaces[randomY - 1][randomX + 1].adjacentBombs += 1;
        }
      }
      if (board.spaces[randomY + 1]) {
        if (board.spaces[randomY + 1][randomX]) {
          board.spaces[randomY + 1][randomX].adjacentBombs += 1;
        }

        if (board.spaces[randomY + 1][randomX + 1]) {
          board.spaces[randomY + 1][randomX + 1].adjacentBombs += 1;
        }
        if (board.spaces[randomY + 1][randomX - 1]) {
          board.spaces[randomY + 1][randomX - 1].adjacentBombs += 1;
        }
      }
      bombs--;
    }
  }
  console.log(board);
  return board;
};