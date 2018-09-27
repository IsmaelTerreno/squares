import React from 'react';
import PropTypes from 'prop-types';

const PreviewSquare = ({color, size, border}) => {
  return (
    <div
      className={"square-preview col-lg-12 col-md-12 col-sm-12 col-12 animated flipInX"}
      style={{
        backgroundColor: color,
        borderBottomRightRadius: border +'px',
        borderBottomLeftRadius: border +'px',
        borderTopLeftRadius: border +'px',
        borderTopRightRadius: border +'px',
        height: size + 'rem'
      }}
    />
  );
};

PreviewSquare.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  border: PropTypes.number.isRequired
};

export default PreviewSquare;
