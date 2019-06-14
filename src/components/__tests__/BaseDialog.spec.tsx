import React from 'react';
import { shallow,ShallowWrapper } from 'enzyme';
import AlertBox, { IAlertBoxProps } from 'components/utilities/AlertBox';
import BaseDialog from 'components/utilities/BaseDialog';
import { DialogTitle } from '@material-ui/core';

let component: ShallowWrapper<IAlertBoxProps>;

let instance: BaseDialog;

const dialogTitle = 'dialog title';
const onClose= jest.fn().mockImplementation(() => {});

describe('AddDictionary', () => {

  beforeEach(() => {

    component = shallow(<BaseDialog title={dialogTitle} open={false}  onClose={onClose}/>,);
    instance = component.instance() as AlertBox;

  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {

    expect(component).toBeDefined();

  });


  it('should dispay the message passed with the props', () => {

    expect(component.find(DialogTitle).text()).toContain(dialogTitle);

  });

  
  it('should call the onlose function passed as parameter when the user clicks on the closing icon', () => {

    component.find('.modal-btn-close').simulate('click');

    expect(onClose).toHaveBeenCalled();
  });
  

});