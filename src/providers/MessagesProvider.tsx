import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

interface AppState {
    open: boolean;
    message: string,
    newMessage(messageToShow: string): void;
};

export const MessagesContext = React.createContext({} as AppState);

// Create an exportable consumer that can be injected into components
export const MessagesConsumer = MessagesContext.Consumer

// Create the provider using a traditional Component class
class MessagesProvider<Object, AppState> extends Component {

    state = {
        open: false,
        message: 'default',
        newMessage: (messageToShow: string) => {
            this.setState({ open: true, message: messageToShow });
        }
    };

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
                <Button onClick={() => this.handleClick()}>Open simple snackbar</Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={2000}
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
                        >X
                        </IconButton>,
                    ]}
                />
                {this.props.children}
            </MessagesContext.Provider>
        )
    }
}
export default MessagesProvider;

