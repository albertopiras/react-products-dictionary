import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';

interface IBaseDialogProps {
  selectedValue?: string;
  title:string;
  open: boolean;
  onClose(param:any):void;
}

class BaseDialog extends Component<IBaseDialogProps> {

   handleClose =()=> {
    this.props.onClose(this.props.selectedValue);
  }

  handleListItemClick = (value:any)=> {
    this.props.onClose(value);
  }

  render(){
    const { onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
      <DialogTitle className='modal-title'>{this.props.title}</DialogTitle>
      <DialogContent>
          {this.props.children}
        </DialogContent>
      </Dialog>
  );
  }
}

export default BaseDialog;