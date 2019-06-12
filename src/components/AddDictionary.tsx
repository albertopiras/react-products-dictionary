import React, { Component, Fragment } from 'react';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';
import { Fab, Icon } from '@material-ui/core';
import BaseDialog from './dialog/BaseDialog';
import './AddDictionary.scss';

interface IAddDictionaryParams {
  onAddDictionary: (newDictionaryName: string) => void
}

interface IComponentState {
  open: boolean;
}

class AddDictionary extends Component<IAddDictionaryParams, IComponentState> {

  state: IComponentState = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

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
                <div className="row no-margin">
                  contenuto
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