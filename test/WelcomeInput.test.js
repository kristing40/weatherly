import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeInput from '../lib/components/WelcomeInput.jsx';
import LocalStorageMock from './LocalStorageMock.js';

describe('WelcomeInput', () => {

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

  it('Should render the number of elements with a particular class or id', () => {
    const component = shallow(<WelcomeInput />);
    expect(component.find('.fullDisplay')).toHaveLength(1);
    // expect(component.find(WelcomeInput).render().find('#mainInput')).toHaveLength(1);
  });
});
