import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import PreviewSquare from './PreviewSquare';
import { SIZE_SQUARE } from '../ducks/square/square.action';
configure({ adapter: new Adapter() });

describe('PreviewSquare', () => {

  test('Should renders appropriately', () => {
    const wrapper = shallow(
      <PreviewSquare
        color="#d9e3f0"
        border={40}
        size={SIZE_SQUARE.medium}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
