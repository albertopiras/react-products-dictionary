import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

interface AppState {
    open: boolean;
    message: string,
    newInfoMessage(messageToShow: string): void;
    newSuccessMessage(messageToShow: string): void;
    newErrorMessage(messageToShow: string): void;
    status: MESSAGE_TYPE;
};

enum MESSAGE_TYPE {
    INFO,
    SUCCESS,
    ERROR
}

const TOAST_DURATION = 2000;

export const MessagesContext = React.createContext({} as AppState);

// Create an exportable consumer that can be injected into components
export const MessagesConsumer = MessagesContext.Consumer;

/***
 * MessagesProvider allows to show Snackbar messages.
 */
class MessagesProvider<Object, AppState> extends Component {

    state = {
        open: false,
        message: 'default',
        newInfoMessage: (messageToShow: string) => {
            this.setState({ open: true, message: messageToShow });
        },
        newSuccessMessage: (messageToShow: string) => {
            this.setState({ open: true, message: messageToShow, status: MESSAGE_TYPE.SUCCESS });
        },
        newErrorMessage: (messageToShow: string) => {
            this.setState({ open: true, message: messageToShow, status: MESSAGE_TYPE.ERROR });
        },
        status: MESSAGE_TYPE.INFO
    };

    getMessageColor(status: MESSAGE_TYPE):string {
        switch (status) {
            case MESSAGE_TYPE.INFO:
                return 'message-info';
            case MESSAGE_TYPE.SUCCESS:
                return 'message-success';
            case MESSAGE_TYPE.ERROR:
                return 'message-error';
            default:
                return 'message-info';
        }
    }

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    }

    render() {
        return (
            <MessagesContext.Provider value={this.state}>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    className={this.getMessageColor(this.state.status)}
                    open={this.state.open}
                    autoHideDuration={TOAST_DURATION}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className="class_status"
                            onClick={this.handleClose}
                        ><Icon>close</Icon>
                        </IconButton>,
                    ]}
                />
                {this.props.children}
            </MessagesContext.Provider>
        )
    }
}
export default MessagesProvider;

