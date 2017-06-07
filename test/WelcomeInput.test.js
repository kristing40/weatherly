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

  it('Should display an error message when a user enters a zip code or city that does not exist', () => {
    const component = mount(<WelcomeInput />);
    
  });
});
