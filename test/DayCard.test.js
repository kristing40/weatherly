import React from 'react';
import { shallow, mount } from 'enzyme';
import DayCard from '../lib/components/DayCard.jsx';

describe('DayCard', () => {
  it('hould render all of the props in the component', () => {
    const component = shallow(<DayCard day='Monday' icon="./lib/images/${iconKeysColor[props.icon]"
    high="95"
    low="22"/>);

    expect(component.instance().props);
  });
  it('Should render one property in the component', () => {
    const component = shallow(<DayCard day='Monday' icon='./lib/images/${iconKeysColor[props.icon]'
    high='95'
    low='22'/>);
    const temp = component.find('.ten-day-items');

    expect(component.containsAnyMatchingElements([
      <p className="ten-day-items">High: 95&#176;</p>
    ])).toEqual(true);
  });
  it('Should be able to find a single property and its value', () => {
    const component = shallow(<DayCard/>);

    expect(component.find('.icon-card')).toHaveLength(1);
    expect(component.find('.ten-day-items')).toHaveLength(4);
  });
});
