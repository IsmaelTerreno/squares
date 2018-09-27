import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build/index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme/build/index';
configure({ adapter: new Adapter() });

describe('App', () => {
  test('Should renders appropriately', () => {
    const wrapper = shallow(
      <App/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
