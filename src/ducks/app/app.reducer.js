import { combineReducers } from 'redux';
import { squareReducer } from '../square/square.reducer';
import { messageReducer } from '../message/message.reducer';

const rootReducer = combineReducers({
  squares: squareReducer,
  messages: messageReducer
});


export default rootReducer;
