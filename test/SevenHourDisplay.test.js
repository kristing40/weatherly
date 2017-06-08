import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourDisplay from '../lib/components/SevenHourDisplay.jsx';

describe('SevenHourDisplay', () => {
  it('Should test that a node exists', () => {
    const component = mount(<section className="seven-hour-display"/>);
    expect(component.find('.ten-hour-display').exists()).toBe(false);
  });

  it('Should give the name of the current node', () => {
    const component = mount(<section />);
    expect(component.name()).toEqual('section');
  });

  it('Should return a node at a given index', () => {
    const hourlyObject = [{
      FCTTIME: { civil: '12am' },
      icon: './path',
      temp: { english: '56' },
    }];
    const component = mount(<SevenHourDisplay hourlyObject={hourlyObject} />);

    expect(component.prop('hourlyObject')[0].FCTTIME.civil).toEqual('12am');
  });

  it('Should display seven hourcards', () => {
    const hourlyObject = {
      FCTTIME: { civil: '12am' },
      icon: './path',
      temp: { english: '56' },
    };
    const sevenHourArray = [];

    for (let i = 0; i < 7; i++) {
      sevenHourArray.push(hourlyObject);
    };

    const component = mount(<SevenHourDisplay hourlyObject={sevenHourArray} />)

    expect(component.find('.weather-card')).toHaveLength(7)
  });
});
