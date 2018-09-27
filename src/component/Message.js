import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Message.css';
import {
  CATEGORY_MESSAGE_ERROR,
  CATEGORY_MESSAGE_INFO,
  CATEGORY_MESSAGE_SUCCESS
} from '../ducks/message/message.action';

const Message = ({ message }) => {
  const { content, category, timeStamp } = message;
  let alertCategoryCss = "alert-secondary";
  switch (category) {
    case CATEGORY_MESSAGE_INFO:
      alertCategoryCss = "alert-primary";
      break;
    case CATEGORY_MESSAGE_SUCCESS:
      alertCategoryCss = "alert-success";
      break;
    case CATEGORY_MESSAGE_ERROR:
      alertCategoryCss = "alert-danger";
      break;
    default:
      break;
  }
  const animationMsg = "animated flipOutX alert-message";
  return (content) ? (
      <div className="alert-wrapper">
        <div key={timeStamp} role="alert" className={`alert ${ alertCategoryCss } ${animationMsg}`}>
          { content }
        </div>
      </div>
    ) : null ;
};

Message.propTypes = {
  message: PropTypes.shape({
    category: PropTypes.string,
    content: PropTypes.string
  })
};

export default Message;
