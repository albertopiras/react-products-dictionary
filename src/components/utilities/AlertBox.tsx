import React, { Component } from 'react';
import './AlertBox.scss';

export interface IAlertBoxProps {
  message: string;
}
class AlertBox extends Component<IAlertBoxProps>{

  render() {
    const { message } = this.props;

    return (
      <p className="alert-box">
        {message}
      </p>
    )
  }
}
export default AlertBox;