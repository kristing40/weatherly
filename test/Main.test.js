import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../lib/components/Main.jsx';
import LocalStorageMock from './LocalStorageMock';

describe('Main', () => {
  it('Should render Main component', () => {
    const component = mount(<Main />);

    expect(component.instance().props);
  });

  it('Should have parents', () => {
    const component = mount(<Main />);

    expect(component.find('h1').parents()).toHaveLength(3);
    expect(component.find('h2').parents()).toHaveLength(2);
  });
});
