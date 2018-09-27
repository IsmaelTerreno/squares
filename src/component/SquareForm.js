import React, { Component } from 'react';
import '../styles/SquareForm.css';
import { TwitterPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import PreviewSquare from './PreviewSquare';
import Square from '../model/Square';
import Message from '../container/Message.container';
import { SIZE_SQUARE } from '../ducks/square/square.action';

const defaultState = {
  color:"#d9e3f0",
  border: 0,
  isShowPicker: false,
  size: SIZE_SQUARE.small
};

/**
 * Form to create a Square.
 */
class SquareForm extends Component {
    static propTypes = {
      onSubmit: PropTypes.func,
      square: PropTypes.shape({
        color: PropTypes.string,
        border: PropTypes.number,
        size: PropTypes.number,
        id: PropTypes.string
      }),
      newMessage: PropTypes.func,
      onDelete: PropTypes.func
    };

    state = defaultState;

    componentDidMount(){
      if(this.props.square){
        const { color, border, size } = this.props.square;
        this.setState({
          color,
          border,
          size
        });
      }
      this.props.newMessage("","");
    }

    showColorPicker = () => {
        this.setState({
            isShowPicker: true
        });
    };

    hideColorPicker = () => {
        this.setState({
            isShowPicker: false
        });
    };

    handleChangeColor = (color) => {
        this.setState({
            color: color.hex,
            isShowPicker: true
        });
    };
    handleChangeBorder = (event) => {
      this.setState({
        border: parseInt(event.target.value, 10)
      });
    };

    handleChangeSize = (event) => {
      this.setState({
        size: event.target.value
      });
    };
    handleOnSubmit = (event) => {
      event.preventDefault();
      const { square } = this.props;
      const {color, border, size} = this.state;
      const squareId = (square) ? square.id : null;
      const squareToPersist = new Square(
        squareId,
        color,
        border,
        size
      );
      this.props.onSubmit(squareToPersist);
      const delayedAction = () => {
        this.setState(defaultState);
      };
      setTimeout(() => { delayedAction() }, 1900);
    };

    goBackTo = () => {
      const { history} = this.props;
      history.push("/square/gallery");
    };
    render(){
        const {color, isShowPicker, border, size} = this.state;
        const { square, onDelete, history } = this.props;
        return (
            <div className="animated flipInX">
                <h4>Square</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="colourSquare">Colour</label>
                        <div className="input-group">
                            <div className="input-group-prepend" onClick={this.showColorPicker}>
                              <div className="input-group-text" >
                                <FontAwesomeIcon icon="ellipsis-v" />
                              </div>
                            </div>
                          <input id="colourSquare"
                            readOnly
                            style={{
                                backgroundColor: color,
                                color: 'rgba(0, 0, 0, 0)'
                            }}
                            value={color}
                            className="form-control"
                            placeholder="Color"
                          />
                        </div>
                        {isShowPicker &&
                            <div className="color-picker animated rubberBand">
                                <TwitterPicker className="color-picker-panel" color={ color } onChangeComplete={ this.handleChangeColor }/>
                                <button onClick={this.hideColorPicker} type="button" className="btn btn-primary color-picker-button">Ok</button>
                            </div>
                        }
                    </div>
                  {!isShowPicker &&
                    <div className="form-group">
                      <label htmlFor="sizeSquare">Size</label>
                      <select onChange={this.handleChangeSize} className="form-control" id="sizeSquare">
                        <option value={SIZE_SQUARE.small} key="size-1">Small</option>
                        <option value={SIZE_SQUARE.medium} key="size-2">Medium</option>
                        <option value={SIZE_SQUARE.big} key="size-3">Big</option>
                      </select>
                    </div>
                  }
                  {!isShowPicker &&
                  <div className="form-group">
                    <label htmlFor="borderSquare">Border</label>
                    <input min="0" max="40" value={border} onChange={this.handleChangeBorder} type="range" className="form-control-range" id="borderSquare"/>
                  </div>}
                  <h5>Preview</h5>
                  <div className="row justify-content-md-center">
                    <div className={"square-preview-message col-lg-12 col-md-12 col-sm-12 col-12"} >
                      <Message/>
                    </div>
                  </div>
                  <div className="row justify-content-md-center">
                    <PreviewSquare
                      color={color}
                      border={border}
                      size={size}
                    />
                  </div>
                  <div className="dropdown-divider space" />
                  <div className="row">
                    <div className="col">
                      <button type="button" onClick={() => {
                        onDelete(square);
                        history.push("/square/gallery");
                      }} className="btn btn-primary animated rubberBand"><FontAwesomeIcon icon="trash-alt" /></button>
                    </div>
                    <div className="col">
                      <button type="submit" className="btn btn-primary animated rubberBand"><FontAwesomeIcon icon="save" /></button>
                    </div>
                    <div className="col">
                      <button onClick={this.goBackTo} className="btn btn-primary animated rubberBand"><FontAwesomeIcon icon="images" /></button>
                    </div>
                  </div>
                </form>
            </div>
        );
    }
}

export default SquareForm;
