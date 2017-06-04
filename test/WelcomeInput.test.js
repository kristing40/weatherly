import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeInput from '../lib/components/WelcomeInput.jsx';

describe('WelcomeInput', () => {
  it('Should render', () => {
    const component = mount(<WelcomeInput />);
    const input = component.find('input[type="text"]');

    console.log(input.debug());

  });
});
