import * as SquareAction from './square.action';

const initialState = {
  isFetching: false,
  list: [],
  current: null
};

export const squareReducer = (state = initialState, action) => {
  switch (action.type) {
    case SquareAction.FIND_ALL_SQUARES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SquareAction.FIND_ALL_SQUARES_SUCCESS:
      return {
        ...state,
        list: action.squares,
        isFetching: false,
      };
    case SquareAction.FIND_ALL_SQUARES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case SquareAction.SAVE_SQUARE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SquareAction.SAVE_SQUARE_SUCCESS:
      return {
        ...state,
        current: action.square,
        isFetching: false,
      };
    case SquareAction.SAVE_SQUARE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case SquareAction.SET_CURRENT_SQUARE:
      return {
        ...state,
        current: action.square
      };
    case SquareAction.DELETE_SQUARE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SquareAction.DELETE_SQUARE_SUCCESS:
      return {
        ...state,
        current: null,
        isFetching: false,
      };
    case SquareAction.DELETE_SQUARE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state
  }
};
