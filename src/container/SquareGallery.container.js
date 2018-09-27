import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SquareGallery from '../component/SquareGallery';
import { edit, findAll } from '../ducks/square/square.action';

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(findAll(null));
    },
    onClickSquare: (square) => dispatch(edit(square))
  };
};

const mapStateToProps = state => {
  const { squares } = state;
  const { list, isFetching } = squares;
  return {
    squares: list,
    isFetching
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SquareGallery));
