import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeInput from '../lib/components/WelcomeInput.jsx';

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

    console.log(submitButton.debug());

    submitButton.simulate('click');

    expect(input.prop('value')).toEqual('');
  })
});
