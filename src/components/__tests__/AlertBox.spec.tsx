import React from 'react';
import { shallow,ShallowWrapper } from 'enzyme';
import AlertBox, { IAlertBoxProps } from 'components/utilities/AlertBox';

let component: ShallowWrapper<IAlertBoxProps>;

let instance: AlertBox;

const alertMessage = 'Alert message';


describe('AddDictionary', () => {

  beforeEach(() => {
    component = shallow(<AlertBox message={alertMessage} />);

    instance = component.instance() as AlertBox;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {

    expect(component).toBeDefined();

  });


  it('should dispay the message passed with the props', () => {

    expect(component.find('.alert-box').text()).toEqual(alertMessage);

  });
  

});