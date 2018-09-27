import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import SquareGallery from './SquareGallery';
import Square from '../model/Square';

configure({ adapter: new Adapter() });

const squareListMock = [
  new Square("1595a74a-c1da-11e8-a355-529269fb1459","#9ef094", 40, 15),
  new Square("2abf5ae4-c1da-11e8-a355-529269fb1459","#cd8af0", 40, 10),
  new Square("3afc81f2-c1da-11e8-a355-529269fb1459","#f09849", 40, 5)
];

describe('SquareGallery', () => {

  test('Should renders appropriately', () => {
    const mockOnClickSquare = jest.fn();
    const mockOnLoad = jest.fn();
    const wrapper = shallow(
      <SquareGallery
        squares={squareListMock}
        onClickSquare={mockOnClickSquare}
        onLoad={mockOnLoad}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Should call the function passed via onClickSquare and onLoad props.', () => {
    const onClickSquareMock = jest.fn();
    const onLoadMock = jest.fn();
    const pushHistoryMock = jest.fn();
    const historyMock = { push: pushHistoryMock };
    const wrapper = shallow(
      <SquareGallery
        squares={squareListMock}
        onClickSquare={onClickSquareMock}
        onLoad={onLoadMock}
        history={historyMock}
      />
    );
    const squareItem = wrapper.find('.square-preview-item').first();
    squareItem.simulate('click');
    expect(onClickSquareMock).toHaveBeenCalled();
    expect(onLoadMock).toHaveBeenCalled();
    expect(pushHistoryMock).toHaveBeenCalled();
  });

});
