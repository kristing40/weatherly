import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeInput from '../lib/components/WelcomeInput.jsx';
import LocalStorageMock from './LocalStorageMock.js';

describe('WelcomeInput', () => {
  it('Should render', () => {
    const component = mount(<WelcomeInput />);
    const input = component.find('input[type="text"]');
    const inputVal = '80222';
    const changeEvent = { target: { value: inputVal } };

    input.simulate('change', changeEvent);

    expect(input.prop('value')).toEqual(inputVal);
  });

  it('When submit button pressed input value resets to an empty string', () => {
    const component = mount(<WelcomeInput />);
    const input = component.find('input[type="text"]');
    const inputVal = '80222';
    const changeEvent = { target: { value: inputVal } };

    input.simulate('change', changeEvent);

    const submitButton = component.find('input[type="submit"]');

    submitButton.simulate('click');

    expect(input.prop('value')).toEqual('');
  });

  it('Should test that state exists', () => {
    const component = mount(<WelcomeInput />);
    expect(component.state().input).toEqual('80222');
  });

  it('Should test that welcomePage starts as true', () => {
    const component = mount(<WelcomeInput />);
    expect(component.state().welcomePage).toEqual(true);
  });

  it('Should test that errorMessage starts as false', () => {
    const component = mount(<WelcomeInput />);
    expect(component.state().errorMessage).toEqual(false);
  });

  it('Should test that weatherSumary is not a state at start', () => {
    const component = mount(<WelcomeInput />);
    expect(component.state().weatherSummary).toBeUndefined();
  });

  it.skip('Should test that datalist maps over an array index', () => {
    const city = ['Atlanta', 'Denver', 'Austin']
    const component = mount(<datalist id="cities" size="45">
      <option className="drop-down" value={city[0]} />
      <option className="drop-down" value={city[1]} />
      <option className="drop-down" value={city[2]} /></datalist>);
      const dropdown = component.find('.drop-down').map(node => node);

    expect(dropdown).toEqual([city[0], city[1], city[2]]);
  });

  it.skip('It should execute passed in function when clicked', () => {
    const mockFn = jest.fn();
    const component = shallow(<WelcomeInput handleSubmit={mockFn} />);
    const button = component.find('.submit-btn');
    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(0);
    component.setState({ input: 'Hello World!' });
    button.simulate('submit');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
