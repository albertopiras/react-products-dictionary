import React, { Component } from 'react'

interface DictionaryState {
    // colors
    colors: any;
    currentDictionary:string | null;
    getColorDescription(hex: string): string | null;
    getColorMutation(hex: string): string;
    getCurrentDictionaryName(): string | null;
    getColorList: any;
    // dictionary
    getDictionaries: any;
    activateDictionary: (newDictionary: string) => void;
};

const colors = {
    "#FFFFFF": "WHITE",
    "#C0C0C0": "SILVER",
    "#808080": "GRAY",
    "#000000": "BLACK",
    "#FF0000": "RED",
    "#800000": "MAROON",
    "#FFFF00": "YELLOW",
    "#808000": "OLIVE",
    "#00FF00": "LIME",
    "#008000": "GREEN",
    "#00FFFF": "AQUA",
    "#008080": "TEAL",
    "#0000FF": "BLUE",
    "#000080": "NAVY",
    "#FF00FF": "FUCHSIA",
    "#800080": "PURPLE"
};

interface Dictionary {
    dictionaryName: string;
    mutations: any
}

const dictionaries = [
    {
        dictionaryName: "dictionary1",
        mutations: {
            "#008000": "#00FF00",
            "#008080": "#0000FF"
        }
    },
    {
        dictionaryName: "dictionary2",
        mutations: {
            "#800080": "#FF00FF",
            "#008000": "#800000"
        }
    }
]

const initialState: DictionaryState = {
    currentDictionary: null,
    getDictionaries: () => dictionaries,
    activateDictionary: (newDictionary: string) => { },
    colors: colors,
    getCurrentDictionaryName: () => null,
    getColorDescription: (hex: string) => {
        console.log('context get Color Description for ',hex);
        const color = (colors as any)[hex];
        return color ? color : null;
    },
    // getColorDescription: (id: number) => null,
    getColorList: () => {   
        return Object.keys(colors)
            .map((item) => {
                return { value: item, label: (colors as any)[item] }
            });
    },
    getColorMutation: (param: string) => ''
};

export const ColorDictionariesContext = React.createContext(initialState);

// Create an exportable consumer that can be injected into components
export const ColorDictionariesConsumer = ColorDictionariesContext.Consumer

// Create the provider using a traditional Component class
class ColorDictionariesProvider extends Component {

    state = {
        ...initialState, activateDictionary: (newDictionary: string) => {
            console.log("context activate dictionary");
            this.setState({ currentDictionary: this.state.currentDictionary!=newDictionary? newDictionary : null })
        },
        getCurrentDictionaryName: () => {
            return this.state.currentDictionary;
        },
        getColorMutation: (hexColor: string): string => {
            const currentDictionaryObj = this.getActiveDictionaryObj();
            let response = hexColor;
            if (currentDictionaryObj && currentDictionaryObj.mutations[hexColor]) {
                response = currentDictionaryObj.mutations[hexColor];
            }
            console.log('from ', hexColor, 'to ', response);
            return response;
        }
    };

    // private methods and props
    private getActiveDictionaryObj = (): Dictionary | null | undefined => {
        if (!this.state.currentDictionary) return null;
        return this.state.getDictionaries().find((dictionary: Dictionary) => dictionary.dictionaryName === this.state.currentDictionary);
    };

    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <ColorDictionariesContext.Provider value={this.state}>
                {this.props.children}
            </ColorDictionariesContext.Provider>
        )
    }
}
export default ColorDictionariesProvider;