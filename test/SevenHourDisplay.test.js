import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourDisplay from '../lib/components/SevenHourDisplay.jsx';

describe('SevenHourDisplay', () => {
  it('Should test that a node exists', () => {
    const component = mount(<section className="seven-hour-display"/>);
    expect(component.find('.ten-hour-display').exists()).toBe(false);
  });

  it('Should return a node at a given index', () => {
    const component = mount(<SevenHourDisplay hourlyObject={["12am", "1am", "2am"]}/>);
    expect(component.find(time).get(0).props.cardTime).toEqual('12am');
  });

  it('Should give the name of the current node', () => {
    const component = mount(<section />);
    expect(component.name()).toEqual('section');
  });
});
