import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  FILTER_BY_OPTION_DEFAULT,
  FILTER_BY_OPTIONS,
  ORDER_BY_OPTION_DEFAULT,
  ORDER_BY_OPTIONS
} from  '../ducks/square/square.action';

class GalleryActions extends Component {

  static propTypes = {
    findAllBy: PropTypes.func.isRequired
  };

  state = {
    filterBy: FILTER_BY_OPTION_DEFAULT,
    orderBy: ORDER_BY_OPTION_DEFAULT,
    isMenuOrder: false,
    isMenuFilter: false
  };

  hideMenuOrder = () => {
    this.setState({
      isMenuOrder: false
    })
  };

  showMenuOrder = () => {
    this.setState({
      isMenuOrder: true
    })
  };

  hideMenuFilter = () => {
    this.setState({
      isMenuFilter: false
    })
  };

  showMenuFilter = () => {
    this.setState({
      isMenuFilter: true
    })
  };
  findAllByOptions = (filterBy, orderBy) => {
    this.props.findAllBy({
      filterBy,
      orderBy
    });
  };
  onSelectOrderBy = (orderByX) => {
    this.hideMenuOrder();
    this.setState({
      orderBy : orderByX
    });
    this.findAllByOptions(this.state.filterBy, orderByX);
  };

  onSelectFilterBy = (filterByX) => {
    this.hideMenuFilter();
    this.setState({
      filterBy: filterByX
    });
    this.findAllByOptions(filterByX, this.state.orderBy);
  };

  render(){
    const {
      isMenuFilter,
      isMenuOrder,
      filterBy,
      orderBy
    } = this.state;
    const showCssOrder = (isMenuOrder) ? "show" : "";
    const showCssFilter = (isMenuFilter) ? "show" : "";
    return (
      <div className="">
        <div className="row">
          <div className="col">
            <Link role="button" to="/" className="btn btn-primary animated rubberBand"><FontAwesomeIcon icon="arrow-left" /></Link>
          </div>
          <div className="col">
            <div className="btn-group">
              <button title={filterBy} onClick={this.showMenuFilter} type="button" className="btn btn-primary dropdown-toggle animated rubberBand" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon="filter" /><span> </span>
              </button>
              <div className={`dropdown-menu ${showCssFilter}`}>
                {
                  FILTER_BY_OPTIONS.map((filterX, idx) =>{
                    return (
                      <button key={`filter-option-${idx}`} onClick={() => this.onSelectFilterBy(filterX)} className="dropdown-item">{filterX.label}</button>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="col">
            <div className="btn-group">
              <button title={orderBy} onClick={this.showMenuOrder} type="button" className="btn btn-primary dropdown-toggle animated rubberBand" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon="sort" />
              </button>
              <div className={`dropdown-menu ${showCssOrder}`}>
                {
                  ORDER_BY_OPTIONS.map((orderByX, idx) => {
                    return (
                      <button key={`order-option-${idx}`} onClick={() => this.onSelectOrderBy(orderByX)} className="dropdown-item">{orderByX.label}</button>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryActions;
