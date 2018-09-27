import * as MessageAction from './message.action';

const initialState = {
  category: "",
  content: "",
  timeStamp: 0
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MessageAction.NEW_MESSAGE:
      return {
        ...state,
        category: action.category,
        content: action.content,
        timeStamp: new Date().getTime()
      };
    default:
      return state
  }
};
