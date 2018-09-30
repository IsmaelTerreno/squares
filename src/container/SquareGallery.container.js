import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SquareGallery from '../component/SquareGallery';
import {
    edit,
    FILTER_BY_OPTION_DEFAULT,
    findAll,
    FindOptions,
    ORDER_BY_OPTION_DEFAULT
} from '../ducks/square/square.action';

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(findAll(new FindOptions(FILTER_BY_OPTION_DEFAULT, ORDER_BY_OPTION_DEFAULT)));
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
