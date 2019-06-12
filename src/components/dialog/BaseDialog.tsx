import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';

interface IBaseDialogProps {
  title: string;
  open: boolean;
  onClose(): void;
}

class BaseDialog extends Component<IBaseDialogProps> {

  handleClose = () => {
    this.props.onClose();
  }

  handleListItemClick = (value: any) => {
    this.props.onClose();
  }

  render() {
    const { onClose, title, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
        <DialogTitle className='modal-title'>{title}</DialogTitle>
        <DialogContent>
          {this.props.children}
        </DialogContent>
      </Dialog>
    );
  }
}

export default BaseDialog;