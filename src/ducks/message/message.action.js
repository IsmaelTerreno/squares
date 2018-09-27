export const NEW_MESSAGE = 'NEW_MESSAGE';

export const CATEGORY_MESSAGE_INFO = 'CATEGORY_MESSAGE_INFO';
export const CATEGORY_MESSAGE_SUCCESS = 'CATEGORY_MESSAGE_SUCCESS';
export const CATEGORY_MESSAGE_ERROR = 'CATEGORY_MESSAGE_ERROR';

export const newMessage = (category, content) => ({
  type: NEW_MESSAGE,
  category,
  content
});
