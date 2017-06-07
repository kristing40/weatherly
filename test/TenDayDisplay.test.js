import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayDisplay from '../lib/components/TenDayDisplay.jsx';

describe('TenDayDisplay', () => {
  it('Should test that a node exists', () => {
    const component = mount(<section className="ten-day-display"/>);
    expect(component.find('.ten-hour-display').exists()).toBe(false);
  });

  it.skip('Should return a node at a given index', () => {
    const component = mount(<TenDayDisplay />);
    expect(component.find(time).get(0).props.cardTime).toEqual("12am");
  });

  it('Should give the name of the current node', () => {
    const component = mount(<section />);
    expect(component.name()).toEqual('section');
  });

});
