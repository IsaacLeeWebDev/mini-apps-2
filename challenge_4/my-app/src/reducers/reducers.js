import { createBoard, clickSpace } from '../actions/actions.js'

export const defaultState = createBoard(10, 10, 10)
export const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE-BOARD':
      console.log(defaultState);
      return createBoard(10, 10, 10);
    case 'CLICK-SPACE':
      return clickSpace(action.payload.board, action.payload.x, action.payload.y)
    default:
      console.log('returning default state:', defaultState);
      return defaultState;
  }
}
