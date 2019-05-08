import React, { Component } from 'react';

const SnackbarConetxt = React.createContext();

export class SnackbarProvider extends Componenet {
    constructor(props){
        super(props);
        this.state = {
            open:false,
            message:''
        }
    }
    openSnackbar= (message) =>{
        this.setState((prevState) => {...prevState, open:true, message:message})
    }

    closeSnackbar= (message) =>{
        this.setState((prevState) => {...prevState, open:false, message:''})
    }
    render(){
        const {children} = this.props;
        return (
            <SnackbarConetxt.Provider value={{
                openSnackbar: this.openSnackbar,
                closeSnackbar: this.closeSnackbar,
                snackbarIsOpen: this.state.open
                message: this.state.message,
            }} >
            {children}
            </SnackbarConetxt.Provider>
        )
    }
}
export const SnackbarConsumer = SnackbarConetxt.Consumer;