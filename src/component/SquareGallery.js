import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PreviewSquare from './PreviewSquare';
import Loading from '../component/Loading';
import GalleryActions from '../container/GalleryActions.container';

class SquareGallery extends Component {

  static propTypes = {
    squares: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      border: PropTypes.number,
      size: PropTypes.number,
      id: PropTypes.string
    })).isRequired,
    onClickSquare: PropTypes.func.isRequired,
    onLoad: PropTypes.func,
    isFetching: PropTypes.bool
  };

  componentDidMount(){
    this.props.onLoad();
  }
  render() {
    const { squares, onClickSquare, history, isFetching } = this.props;
    return (
      <div className="">
        <h4>Square Gallery</h4>
        <GalleryActions/>
        <div key={'button-bar-top'} className="dropdown-divider space" />
        { isFetching && <Loading /> }
        {squares.map((item, idx) => {
          return (
            <div className="square-preview-item" key={'square-preview-' + idx}
            onClick={() => {
                onClickSquare(item);
                history.push('/square');
              }
            } >
              <PreviewSquare
                color={item.color}
                border={item.border}
                size={item.size}
              />
              <div key={'square-preview-space' + idx} className="dropdown-divider space" />
            </div>
          );
        })}
      </div>
    );
  };

}

export default SquareGallery;
