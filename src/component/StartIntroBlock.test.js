import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import StartIntroBlock from './StartIntroBlock';

configure({ adapter: new Adapter() });

describe('StartIntroBlock', () => {

  test('Should renders appropriately', () => {
    const wrapper = shallow(
      <StartIntroBlock
        title="Art with Squares"
        description="Create customized stylish squares to have your own gallery and show them to the world."
        buttonLegend="Start to create"
        buttonUrlAction="/square"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
