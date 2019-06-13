import React, { Component } from 'react'
import { Dictionary, Message } from 'models/Models';

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
    createDictionary: (newDictionary: string) => Promise<any>;
    deleteDictionary: (dictionaryName: string) => Promise<any>;
    // mutations
    activateDictionary: (newDictionary: string) => void;
    addDictionaryItem: (dictionaryName: string, from: string, to: string) => Promise<any>;
    updateDictionaryItem: (dictionaryName: string, itemkey: string, from: string, to: string) => Promise<any>;
    removeDictionaryItem: (dicitonaryName: string, itemkey: string) => Promise<any>
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
export const ColorDictionariesConsumer = ColorDictionariesContext.Consumer;

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
            console.log("context - activating dictionary");
            this.setState({ currentDictionary: this.state.currentDictionary !== newDictionary ? newDictionary : null })
        },
        createDictionary: (dictionaryName: string) => {
            console.log("context - creating dictionary");
            return new Promise((resolve, reject) => {
                let dictionary = this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
                if (dictionary) {
                    return reject(new Message('This dictionary already exists'));
                }
                const newDictionary: Dictionary = { dictionaryName: dictionaryName, mutations: {} };
                this.state.dictionaries.push(newDictionary);
                this.setState({ dictionaries: this.state.dictionaries });
                resolve(new Message('Dictionary successfully added'));
            });
        },
        deleteDictionary: (dictionaryName: string) => {
            console.log('context - deleting dictionary ...');
            return new Promise((resolve, reject) => {
                let index = this.state.dictionaries.findIndex((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName);
                if (index === undefined) {
                    return reject(new Message('Dictionary does not exist'));
                }
                this.state.dictionaries.splice(index,1);
                this.setState({ dictionaries: this.state.dictionaries });
                resolve(new Message('Dictionary successfully removed'));
            });
        },

        addDictionaryItem: (dictionaryName: string, from: string, to: string) => {
            console.log('context - adding dictionary mutation ...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dictionary = this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
                    if (!dictionary) return reject(new Message('No dictionary found'));
                    if (dictionary.mutations[from]) return reject(new Message('Item already present', true));
                    dictionary.mutations[from] = to;
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('Item successfully added'));
                }, 600);
            });
        },
        updateDictionaryItem: (dictionaryName: string, itemkey: string, from: string, to: string) => {
            console.log('context - updating dictionary mutation ...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dictionary = this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
                    if (!dictionary) return reject(new Message('No dictionary found'));
                    if (dictionary.mutations[from]) return reject(new Message('Item already present', true));
                    delete dictionary.mutations[itemkey];
                    dictionary.mutations[from] = to;
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('Item successfully updted'));
                }, 600);
            })

        },
        removeDictionaryItem: (dictionaryName: string, itemkey: string) => {
            console.log('context - removing dictionary item ...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dictionary = this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
                    if (!dictionary) return reject(new Message('No dictionary found'));
                    delete dictionary.mutations[itemkey];
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('Item successfully removed'));
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