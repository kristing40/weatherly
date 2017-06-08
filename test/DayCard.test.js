import React from 'react';
import { shallow, mount } from 'enzyme';
import DayCard from '../lib/components/DayCard.jsx';

describe('DayCard', () => {
  it('Should render all of the props in the component', () => {
    const component = shallow(<DayCard
      day="Monday"
      icon="./lib/images/${iconKeysColor[props.icon]"
      high="95"
      low="22"
    />);

    expect(component.instance().props);
  });

  it('Should render one property in the component', () => {
    const component = shallow(<DayCard
      day="Monday"
      icon="./lib/images/${iconKeysColor[props.icon]"
      high="95"
      low="22"
    />);

    expect(component.containsAnyMatchingElements([
      <p className="ten-day-items">High: 95&#176;</p>])).toEqual(true);
  });

  it('Should be able to find a single property and its value', () => {
    const component = shallow(<DayCard />);

    expect(component.find('.icon-card')).toHaveLength(1);
    expect(component.find('.ten-day-items')).toHaveLength(4);
  });
  it('Should expect a ShallowWrapper as the   first argument, and will be run with a context of the original instance', () => {
  const component = shallow(
  <div>
    <p className="foo bax" />
    <p className="foo bar" />
    <p className="foo baz" />
  </div>
);

    component.find('.foo').forEach(function    (node) {
    expect(node.hasClass('foo')).toEqual(true);
});
  });
});
