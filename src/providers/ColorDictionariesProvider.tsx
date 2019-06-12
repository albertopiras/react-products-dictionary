import React, { Component } from 'react'
import { Dictionary, Message } from 'models/Models';
import { reject } from 'q';

interface DictionaryState {
    // colors
    getColorDescription(hex: string): string | null;
    getColorMutation(hex: string): string;
    getColorList: any;
    // dictionary
    // getCurrentDictionary(): Dictionary | null;
    currentDictionary: string | null;
    getDictionaries: any;
    dictionaries: Dictionary[];
    activateDictionary: (newDictionary: string) => void;
    addDictionaryItem: (dictionaryName: string, from: string, to: string) => Promise<any>;
    updateDictionaryItem: (dictionaryName: string, itemkey: string, from: string, to: string) => Promise<any>;
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

const dictionaries = [
    {
        dictionaryName: "Dictionary 1",
        mutations: {
            "#008000": "#00FF00",
            "#008080": "#0000FF"
        }
    },
    {
        dictionaryName: "Dictionary 2",
        mutations: {
            "#800080": "#FF00FF",
            "#008000": "#800000"
        }
    }
]


export const ColorDictionariesContext = React.createContext({} as DictionaryState);

// Create an exportable consumer that can be injected into components
export const ColorDictionariesConsumer = ColorDictionariesContext.Consumer

// Create the provider using a traditional Component class
class ColorDictionariesProvider extends Component {

    findDictionary(dictionaryName: string): Dictionary | undefined {
        return this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName);
    }
    state = {
        currentDictionary: null,
        dictionaries: dictionaries,
        getDictionaries: () => dictionaries,
        getColorDescription: (hex: string) => {
            const color = (colors as any)[hex];
            return color ? color : null;
        },
        getColorList: () => {
            return colors;
        },
        activateDictionary: (newDictionary: string) => {
            console.log("context - activate dictionary");
            this.setState({ currentDictionary: this.state.currentDictionary !== newDictionary ? newDictionary : null })
        },
        addDictionaryItem: (dictionaryName: string, from: string, to: string) => {
            console.log('context - adding dictionary mutation ...');
            return new Promise(resolve => {
                setTimeout(() => {
                    let dictionary = this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
                    if (!dictionary) reject(new Message('no dictionary found'));
                    if (dictionary.mutations[from]) reject(new Message('item already present', true));
                    dictionary.mutations[from] = to;
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('item added'));
                }, 600);
            });
        },
        updateDictionaryItem: (dictionaryName: string, itemkey: string, from: string, to: string) => {
            console.log('context - updating dictionary mutation ...');
            return new Promise(resolve => {
                setTimeout(() => {
                    let dictionary = this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
                    if (!dictionary) reject(new Message('no dictionary found'));
                    delete dictionary.mutations[itemkey];
                    dictionary.mutations[from] = to;
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('item updted'));
                }, 600);
            })

        },
        getColorMutation: (hexColor: string): string => {
            const currentDictionaryObj = this.getActiveDictionaryObj();
            let response = hexColor;
            if (currentDictionaryObj && currentDictionaryObj.mutations[hexColor]) {
                response = currentDictionaryObj.mutations[hexColor];
            }
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