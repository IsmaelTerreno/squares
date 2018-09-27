import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/app-main-logo.png';
import { Link } from 'react-router-dom';

/**
 * Intro block to show the first info and start action.
 */
const StartIntroBlock = ({title, description, buttonLegend, buttonUrlAction}) => (
    <div className="animated bounceIn">
      <div className="card" style={{padding: '0.5rem', marginTop:'8rem'}}>
        <img className="card-img-top" style={{width:'5rem', margin: '0 auto'}} src={logo} alt="Square" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="row">
            <div className="col">
              <Link role="button" to={buttonUrlAction} className="btn btn-primary animated rubberBand">Start to create</Link>
            </div>
            <div className="col">
              <Link role="button" to="/square/gallery" className="btn btn-primary animated rubberBand">Gallery</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
);

StartIntroBlock.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLegend: PropTypes.string,
    buttonUrlAction: PropTypes.string,
};

export default StartIntroBlock;





