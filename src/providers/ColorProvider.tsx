import React, { Component } from 'react'
import axios from 'axios';

interface ColorState {
    colors: any;
    getColorDescription(hex: string): string | null;
    getColorList: any;
};

const colors = {
    hex1: 'Grigio',
    hex2: 'Red',
    hex3: 'Green'
};

const initialState: ColorState = {
    colors : colors,
    getColorDescription: (hex: string) => {
        console.log('context get Color Description');
        const color = (colors as any)[hex];
        return color ? color : null;
    },
    // getColorDescription: (id: number) => null,
    getColorList: () => {
        return Object.keys(colors)
            .map((item) => {
                return { value: item, label: (colors as any)[item]}
            });
    }
};

export const ColorsContext = React.createContext(initialState);

// Create an exportable consumer that can be injected into components
export const ColorsConsumer = ColorsContext.Consumer

// Create the provider using a traditional Component class
class ColorsProvider extends Component {

    state = initialState;

    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <ColorsContext.Provider value={this.state}>
                {this.props.children}
            </ColorsContext.Provider>
        )
    }
}
export default ColorsProvider;