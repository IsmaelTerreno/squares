import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SquareForm from '../component/SquareForm';
import { deleteSquare, findAll, save } from '../ducks/square/square.action';
import { newMessage } from '../ducks/message/message.action'

const mapStateToProps = state => {
  const { squares } = state;
  const { current, isFetching } = squares;
  return {
    square: current,
    isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (square) => {
      dispatch(save(square));
    },
    newMessage: (category, content) => {
      dispatch(newMessage(category, content))
    },
    onDelete: (square) => {
      if(square){
        dispatch(deleteSquare(square));
        dispatch(findAll(null));
      }
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SquareForm));
