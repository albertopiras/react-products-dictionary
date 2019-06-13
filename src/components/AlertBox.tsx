import React, { Component, Fragment, FormEvent } from 'react';
import { Fab, Icon, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BaseDialog from './dialog/BaseDialog';
import './AlertBox.scss';


interface IAlertBoxProps {
  message: string;
}
class AlertBox extends Component<IAlertBoxProps>{

  render() {
    return (
      <p className="alert-box">
        {this.props.message}
      </p>
    )
  }
}
export default AlertBox;