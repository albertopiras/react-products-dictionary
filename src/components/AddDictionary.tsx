import React, { Component, Fragment } from 'react';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';
import { Fab, Icon, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BaseDialog from './dialog/BaseDialog';
import './AddDictionary.scss';

interface IAddDictionaryParams {
  onAddDictionary: (newDictionaryName: string) => Promise<any>
}

interface IComponentState {
  open: boolean;
  newDictionaryName: string;
}

class AddDictionary extends React.Component<IAddDictionaryParams, IComponentState> {

  state: IComponentState = {
    open: false,
    newDictionaryName: ''
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newDictionaryName: event.target.value });
  }

  handleOnSubmit() {
    this.props.onAddDictionary(this.state.newDictionaryName).then((response)=>{
      console.log('on success');
    }, (err)=>{
      console.log('on error');
    })
  }
  render() {
    return (
      <ColorDictionariesConsumer>
        {(context) => {
          return (

            <Fragment>
              <Fab color="primary" className="plusButton primary-btn" onClick={this.handleClickOpen} aria-label="Add">
                <Icon>add_icon</Icon>
              </Fab>
              <BaseDialog title='add new dictionary' open={this.state.open} onClose={this.handleClose} >
                <div className="row">
                  <TextField
                    label="Dictionary Name"
                    value={this.state.newDictionaryName}
                    onChange={this.handleOnChage}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div className="row">
                  <Button variant="contained" onClick={()=>this.handleOnSubmit()} className="primary-btn no-margin">Add</Button>
                </div>
              </BaseDialog>
            </Fragment>

          )
        }}
      </ColorDictionariesConsumer>
    );
  }
}
export default AddDictionary;