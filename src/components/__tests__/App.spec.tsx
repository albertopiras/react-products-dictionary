import React from 'react';
import { shallow } from 'enzyme';
import App from 'App';


let component:App;

describe('App', () => {
  beforeEach(() => {
    component = shallow(<App />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

});


