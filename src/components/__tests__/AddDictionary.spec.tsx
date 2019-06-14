import React from 'react';
import { ShallowWrapper } from 'enzyme';
import { mount } from 'enzyme';
import AddDictionary, { IAddDictionaryParams, IComponentState } from 'components/AddDictionary';
import { Fab, TextField } from '@material-ui/core';

let component: ShallowWrapper<IAddDictionaryParams, IComponentState>;


jest.mock('providers/ColorDictionariesProvider');

describe('AddDictionary', () => {

  beforeEach(() => {
    component = mount(<AddDictionary open='false' newDictionaryName='lillo' />);

    component.find(Fab).simulate('click');

  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {

    expect(component).toBeDefined();
    
  });

  it('should open the add dictionary dialog after the click on the fab button', () => {

    component.find(Fab).simulate('click');

    expect(component.state('open')).toBe(true);

  });

  it('should contain a TextField', () => {

    expect(component.find(TextField)).toHaveLength(1);

  });

  it('should be empty when the dialog is opened', () => {

    expect(component.find(TextField).prop('value')).toEqual('');

  });


  it('should contain a TextField containing the label sentence "Dictionary Name"', () => {

    expect(component.find(TextField).text()).toContain('Dictionary Name');

  });

  it('should be updated changing the state', () => {

    component.setState({ newDictionaryName: 'new Dictionary Name' });
    expect(component.find(TextField).prop('value')).toEqual('new Dictionary Name');

  });
  


});