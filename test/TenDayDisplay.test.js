import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayDisplay from '../lib/components/TenDayDisplay.jsx';

describe('TenDayDisplay', () => {
  it('Should test that a node exists', () => {
    const component = mount(<section className="ten-day-display" />);
    expect(component.find('.ten-hour-display').exists()).toBe(false);
  });

  it('Should give the name of the current node', () => {
    const component = mount(<section />);
    expect(component.name()).toEqual('section');
  });

  it('Should return a node at a given index', () => {
    const dayObject = [{
      date: { weekday: 'Monday' },
      icon: './path',
      high: { fahrenheit: '56' },
      low: { fahrenheit: '23' },
    }];
    const component = mount(<TenDayDisplay dayObject={dayObject} />);

    expect(component.prop('dayObject')[0].date.weekday).toEqual('Monday');
  });

  it('Should display ten dayCards', () => {
    const dayObject = {
      date: { weekday: 'Monday' },
      icon: './path',
      high: { fahrenheit: '56' },
      low: { fahrenheit: '23' },
    };

    const tenDayArray = [];

    for (let i = 0; i < 10; i++) {
      tenDayArray.push(dayObject);
    };

    const component = mount(<TenDayDisplay dayObject={tenDayArray} />)

    expect(component.find('.ten-day-weather-card')).toHaveLength(10)
  });
});
