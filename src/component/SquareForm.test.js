import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import SquareForm from './SquareForm';

configure({ adapter: new Adapter() });

describe('SquareForm', () => {

  test('Should renders appropriately', () => {
    const mockOnSubmit = jest.fn();
    const mockNewMessage = jest.fn();
    const wrapper = shallow(
      <SquareForm
        onSubmit={mockOnSubmit}
        newMessage={mockNewMessage} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Should call the function passed via onSubmit props.', () => {
    const mockOnSubmit = jest.fn();
    const mockNewMessage = jest.fn();
    const wrapper = shallow(
      <SquareForm
        onSubmit={mockOnSubmit}
        newMessage={mockNewMessage} />
    );
    const form = wrapper.find('form');
    form.simulate('submit', {
        preventDefault: () => {
        }
      }
    );
    expect(mockOnSubmit).toHaveBeenCalled();
  });

});
