import React, { Component, Fragment, FormEvent } from 'react';
import { Fab, Icon, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './AddDictionary.scss';
import { MessagesContext } from 'providers/MessagesProvider';
import BaseDialog from './utilities/BaseDialog';

export interface IAddDictionaryParams {
  onAddDictionary: (newDictionaryName: string) => Promise<any>
}

export  interface IComponentState {
  open: boolean;
  newDictionaryName: string;
}

class AddDictionary extends Component<IAddDictionaryParams, IComponentState> {

  static contextType = MessagesContext;

  state: IComponentState = {
    open: false,
    newDictionaryName: ''
  }

  handleClickOpen = () => {
    this.setState({ newDictionaryName: '',open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newDictionaryName: event.target.value });
  }

  handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onAddDictionary(this.state.newDictionaryName).then((response) => {
      this.context.newSuccessMessage(response.content);
      this.handleClose();
    }, (error) => {
      this.context.newErrorMessage(error.content);
    });
  }
  
  render() {
    return (
      <Fragment>
        <Fab color="primary" className="plusButton primary-btn" onClick={this.handleClickOpen} aria-label="Add">
          <Icon>add_icon</Icon>
        </Fab>
        <BaseDialog title='add new dictionary' open={this.state.open} onClose={this.handleClose} >
          
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <div className="row">
            <TextField
              autoFocus
              className="full-width"
              label="Dictionary Name"
              value={this.state.newDictionaryName}
              onChange={this.handleOnChage}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="row">
            <Button variant="contained" disabled={!this.state.newDictionaryName} type="submit" className="primary-btn no-margin">Add</Button>
          </div>

        </form>
        </BaseDialog>
      </Fragment>
    )
  }
}
export default AddDictionary;