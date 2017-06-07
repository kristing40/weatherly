import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourDisplay from '../lib/components/SevenHourDisplay.jsx';

describe('SevenHourDisplay', () => {
  it.skip('Should render', () => {
    const component = shallow(<SevenHourDisplay time="12am" temp="85 F" icon="./lib/images/weather.svg" />);
    console.log(component.debug())
    expect(component.contains(<p className="seven-hour-display">
      12am
    </p>)).toEqual(true);

    expect(component.contains(<p className="seven-hour-display">
      85 F℉
    </p>)).toEqual(true);

    expect(component.contains(<p className="seven-hour-display">
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
