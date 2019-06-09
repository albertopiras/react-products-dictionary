import React, { Component } from 'react'
import axios from 'axios';

interface ColorState {
    colors: any;
    getColorDescription(hex: string): string | null;
    getColorList: any;
};


const colors = {
    "#FFFFFF":"WHITE",	
    "#C0C0C0":"SILVER",	
    "#808080":"GRAY",	
    "#000000":"BLACK",	
    "#FF0000":"RED",	
    "#800000":"MAROON",	
    "#FFFF00":"YELLOW",	
    "#808000":"OLIVE",	
    "#00FF00":"LIME",	
    "#008000":"GREEN",	
    "#00FFFF":"AQUA",	
    "#008080":"TEAL",	
    "#0000FF":"BLUE",	
    "#000080":"NAVY",	
   "#FF00FF": "FUCHSIA",	
    "#800080":"PURPLE"
};

const initialState: ColorState = {
    colors: colors,
    getColorDescription: (hex: string) => {
        console.log('context get Color Description');
        const color = (colors as any)[hex];
        return color ? color : null;
    },
    // getColorDescription: (id: number) => null,
    getColorList: () => {
        return Object.keys(colors)
            .map((item) => {
                return { value: item, label: (colors as any)[item] }
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