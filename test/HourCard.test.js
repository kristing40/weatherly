import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/components/HourCard.jsx';

describe('HourCard', () => {
  it('Should render', () => {
    const component = shallow(<HourCard time="12am" temp="85 F" icon="./lib/images/weather.svg" />);

    expect(component.contains(<p className="hour-items">
      12am
    </p>)).toEqual(true);

    expect(component.contains(<p className="hour-temp">
      85 F℉
    </p>)).toEqual(true);

    expect(component.contains(<p className="hour-items">
      <img className="hour-icons" alt="weather icon" src="./lib/images/undefined" />
    </p>)).toEqual(true);

    expect(component.contains('85 F')).toEqual(true);

    expect(component.contains(<div className="weather-card">
      <p className="hour-items">
        12am
      </p>
      <div className="icon-card">
        <p className="hour-items">
          <img className="hour-icons" alt="weather icon" src="./lib/images/undefined" />
        </p>
        <p className="hour-temp-text">
        Temp
        </p>
        <p className="hour-temp">
        85 F℉
        </p>
      </div>
    </div>)).toEqual(true);
  });
});
