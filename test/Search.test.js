import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/components/Search.jsx';
import LocalStorageMock from './LocalStorageMock.js';


describe('Search', () => {
  it('Should change the input value on each key press', () => {
    const component = mount(<Search />);
    const input = component.find('input[type="text"]');
    const inputVal = '80222';
    const changeEvent = { target: { value: inputVal } };

    expect(input.prop('value')).toEqual('');
    input.simulate('change', changeEvent);
    expect(input.prop('value')).toEqual(inputVal);
  });

  it('Should change the state to reflect the user input', () => {
    const component = mount(<Search />);
    const input = component.find('input[type="text"]');
    const inputVal = '80222';
    const changeEvent = { target: { value: inputVal } };

    expect(component.state().input).toEqual('');
    input.simulate('change', changeEvent);
    expect(component.state().input).toEqual('80222');
  });

  it('It should execute passed in function when clicked', () => {
    const mockFn = jest.fn();
    const component = mount(<Search submitHandler={mockFn} />);
    const button = component.find('.submit-btn');

    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(0);

    component.setState({ input: 'denver' });
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
