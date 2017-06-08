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


  it.skip('Should test that datalist maps over an array index', () => {
    const city = ['Atlanta', 'Denver', 'Austin'];
    const component = mount(<datalist id="cities" size="45">
      <option className="drop-down" value={city[0]} />
      <option className="drop-down" value={city[1]} />
      <option className="drop-down" value={city[2]} /></datalist>);
    const dropdown = component.find('.drop-down').map(node => node.value());

    expect(dropdown).toEqual([city[0], city[1], city[2]]);
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
