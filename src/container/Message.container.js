import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Message from '../component/Message';


const mapStateToProps = state => {
  const { messages } = state;
  return {
    message: messages
  }
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Message));
