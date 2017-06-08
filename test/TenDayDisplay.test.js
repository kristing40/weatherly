import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayDisplay from '../lib/components/TenDayDisplay.jsx';

describe('TenDayDisplay', () => {
  it('Should test that a node exists', () => {
    const component = mount(<section className="ten-day-display" />);
    expect(component.find('.ten-hour-display').exists()).toBe(false);
  });

  it.skip('Should return a node at a given index', () => {
    const component = shallow(<TenDayDisplay dayObject={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday']} />);

    console.log(component.debug());
  });

  it('Should give the name of the current node', () => {
    const component = mount(<section />);
    expect(component.name()).toEqual('section');
  });
});
