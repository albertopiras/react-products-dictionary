import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, Icon } from '@material-ui/core';
import './BaseDialog.scss';

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
      <Dialog maxWidth="sm" className="full-width" onClose={this.handleClose} {...other}>
        <DialogTitle className='modal-title'>{title}<Icon className="modal-btn-close" onClick={this.handleClose}>close</Icon></DialogTitle>
        <DialogContent>
          {this.props.children}
        </DialogContent>
      </Dialog>
    );
  }
}

export default BaseDialog;