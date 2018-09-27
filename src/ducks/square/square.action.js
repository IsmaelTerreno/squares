import backendApi from '../../config/backend.api.config';
import {
  newMessage,
  CATEGORY_MESSAGE_SUCCESS, CATEGORY_MESSAGE_ERROR
} from '../message/message.action';
export const FIND_ALL_SQUARES_REQUEST = 'FIND_ALL_SQUARES_REQUEST';
export const FIND_ALL_SQUARES_SUCCESS = 'FIND_ALL_SQUARES_SUCCESS';
export const FIND_ALL_SQUARES_ERROR = 'FIND_ALL_SQUARES_ERROR';
export const SAVE_SQUARE_REQUEST = 'SAVE_SQUARE_REQUEST';
export const SAVE_SQUARE_SUCCESS = 'SAVE_SQUARE_SUCCESS';
export const SAVE_SQUARE_ERROR = 'SAVE_SQUARE_ERROR';
export const SET_CURRENT_SQUARE = 'SET_CURRENT_SQUARE';
export const DELETE_SQUARE_REQUEST = 'DELETE_SQUARE_REQUEST';
export const DELETE_SQUARE_SUCCESS = 'DELETE_SQUARE_SUCCESS';
export const DELETE_SQUARE_ERROR = 'DELETE_SQUARE_ERROR';

export const setCurrentSquare = (square) => ({
  type: SET_CURRENT_SQUARE,
  square
});

export const findAllSquaresRequest = () => ({
  type: FIND_ALL_SQUARES_REQUEST
});

export const findAllSquaresSuccess = (squares) => ({
  type: FIND_ALL_SQUARES_SUCCESS,
  squares
});

export const findAllSquaresError = (error) => ({
  type: FIND_ALL_SQUARES_ERROR,
  error
});

export const saveSquareRequest = () => ({
  type: SAVE_SQUARE_REQUEST
});

export const saveSquareSuccess = (square) => ({
  type: SAVE_SQUARE_SUCCESS,
  square
});

export const saveSquareError = (error) => ({
  type: SAVE_SQUARE_ERROR,
  error
});

export const deleteSquareRequest = () => ({
  type: DELETE_SQUARE_REQUEST
});

export const deleteSquareSuccess = (square) => ({
  type: DELETE_SQUARE_SUCCESS,
  square
});

export const deleteSquareError = (error) => ({
  type: DELETE_SQUARE_ERROR,
  error
});


const HeaderSetup = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export const SIZE_SQUARE = {
  small: 5,
  medium: 8,
  big: 10,
};

export class FindOptions {
  constructor(filterByX, orderByX) {
    this.filterBy = filterByX;
    this.orderBy = orderByX;
  }
}

export class FieldOption {
  constructor(field, value, label){
    this.field = field;
    this.value = value;
    this.label = label;
  }
}

export const FILTER_BY_OPTIONS = [
  new FieldOption("size", "" , "All"),
  new FieldOption("size", SIZE_SQUARE.small, "Small"),
  new FieldOption("size", SIZE_SQUARE.medium, "Medium"),
  new FieldOption("size", SIZE_SQUARE.big, "Big")
];
export const FILTER_BY_OPTION_DEFAULT = FILTER_BY_OPTIONS[0];

export const ORDER_BY_OPTIONS = [
  new FieldOption("updatedAt", null, "Modification"),
  new FieldOption("size", null, "Size")
];
export const ORDER_BY_OPTION_DEFAULT = ORDER_BY_OPTIONS[0];

export const findAll = (options) => dispatch => {
  console.log(options);
  dispatch(findAllSquaresRequest());
  const queryOptions = (options) ? `?filterBySize=${options.filterBy.value}&orderBy=${options.orderBy.field}` : '';
  return fetch(`${backendApi.urlBackend}/api/v1/squares${queryOptions}`,
    {
      method: 'get',
      headers: HeaderSetup
    })
    .then(response => response.json())
    .then(squaresResponse => {
      dispatch(findAllSquaresSuccess(squaresResponse));
    })
    .catch((error) => {
      dispatch(findAllSquaresError(error));
    });
};

export const save = (square) => dispatch => {
  dispatch(saveSquareRequest());
  return fetch(`${backendApi.urlBackend}/api/v1/squares`,
    {
      method: 'post',
      headers: HeaderSetup,
      body: JSON.stringify( square )
    })
    .then(response => response.json())
    .then(squareResponse => {
      dispatch(saveSquareSuccess(squareResponse));
      dispatch(setCurrentSquare(squareResponse));
      dispatch(newMessage(
        CATEGORY_MESSAGE_SUCCESS,
        "Square saved."
      ));
    })
    .catch((error) => {
      dispatch(saveSquareError(error));
    });
};

export const edit = (square) => dispatch => {
  dispatch(setCurrentSquare(square));
};

export const deleteSquare = (square) => dispatch => {
  dispatch(deleteSquareRequest());
  return fetch(`${backendApi.urlBackend}/api/v1/squares/${ square.id }`,
    {
      method: 'delete',
      headers: HeaderSetup
    })
    .then(response => response.json())
    .then(squareResponse => {
      dispatch(deleteSquareSuccess(squareResponse));
      dispatch(newMessage(
        CATEGORY_MESSAGE_SUCCESS,
        "Square deleted."
      ));
    })
    .catch((error) => {
      dispatch(newMessage(
        CATEGORY_MESSAGE_ERROR,
        "Square not exist or deleted."
      ));
      dispatch(deleteSquareError(error));
    });
};
