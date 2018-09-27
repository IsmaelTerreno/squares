import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GalleryActions from '../component/GalleryActions';
import { findAll, FindOptions } from '../ducks/square/square.action';

const mapDispatchToProps = dispatch => {
  return {
    findAllBy: (options) => {
      dispatch(findAll(new FindOptions(options.filterBy, options.orderBy)));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(GalleryActions));
