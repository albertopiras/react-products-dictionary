import React, { Component } from 'react'
import { Dictionary, Message } from 'models/Models';

interface DictionaryState {
    // colors
    getColorDescription(hex: string): string | null;
    getColorMutation(hex: string): string;
    getColorList: () => { [s: string]: string };
    // dictionaries
    currentDictionary: string | null;
    getDictionaries: any;
    dictionaries: Dictionary[];
    createDictionary: (newDictionary: string) => Promise<any>;
    deleteDictionary: (dictionaryName: string) => Promise<any>;
    activateDictionary: (newDictionary: string) => void;
    // mutations
    addDictionaryItem: (dictionaryName: string, from: string, to: string) => Promise<any>;
    updateDictionaryItem: (dictionaryName: string, itemkey: string, from: string, to: string) => Promise<any>;
    removeDictionaryItem: (dicitonaryName: string, itemkey: string) => Promise<any>
};

const colors = {
    "#00FFFF": "AQUA",
    "#000000": "BLACK",
    "#0000FF": "BLUE",
    "#FF00FF": "FUCHSIA",
    "#808080": "GRAY",
    "#008000": "GREEN",
    "#00FF00": "LIME",
    "#800000": "MAROON",
    "#000080": "NAVY",
    "#808000": "OLIVE",
    "#800080": "PURPLE",
    "#FF0000": "RED",
    "#C0C0C0": "SILVER",
    "#008080": "TEAL",
    "#FFFFFF": "WHITE",
    "#FFFF00": "YELLOW"
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

    state = {
        currentDictionary: null,
        dictionaries: dictionaries,
        getDictionaries: () => dictionaries,
        getColorDescription: (hex: string) => {
            const color = (colors as any)[hex];
            return color ? color : null;
        },
        getColorList: (): { [s: string]: string } => {
            return colors;
        },
        activateDictionary: (newDictionary: string) => {
            console.info("context - activating dictionary");
            this.setState((prevState: DictionaryState) => ({ currentDictionary: (prevState.currentDictionary !== newDictionary) ? newDictionary : null }));
        },
        createDictionary: (dictionaryName: string) => {
            console.info("context - creating dictionary");
            return new Promise((resolve, reject) => {
                let dictionary = this.findDictionary(dictionaryName);
                if (dictionary) {
                    return reject(new Message('This dictionary already exists'));
                }
                const newDictionary: Dictionary = { dictionaryName: dictionaryName, mutations: {} };
                this.setState((prevState: DictionaryState) => { prevState.dictionaries.push(newDictionary); return { dictionaries: prevState.dictionaries } });
                resolve(new Message('Dictionary successfully added'));
            });
        },
        deleteDictionary: (dictionaryName: string) => {
            console.info('context - deleting dictionary ...');
            return new Promise((resolve, reject) => {
                let index = this.state.dictionaries.findIndex((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName);
                if (index === undefined) {
                    return reject(new Message('Dictionary does not exist'));
                }
                this.setState((prevState: DictionaryState) => { prevState.dictionaries.splice(index, 1); return { dictionaries: prevState.dictionaries } });
                resolve(new Message('Dictionary successfully removed'));
            });
        },

        addDictionaryItem: (dictionaryName: string, from: string, to: string) => {
            console.info('context - adding dictionary mutation ...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dictionary = this.findDictionary(dictionaryName);
                    if (!dictionary) return reject(new Message('No dictionary found'));
                    if (dictionary.mutations[from]) return reject(new Message('Item already present', true));
                    if (from === to) return reject(new Message('Colors shall be different', true));
                    dictionary.mutations[from] = to;
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('Item successfully added'));
                }, 600);
            });
        },
        updateDictionaryItem: (dictionaryName: string, itemkey: string, from: string, to: string) => {
            console.info('context - updating dictionary mutation ...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dictionary = this.findDictionary(dictionaryName);
                    if (!dictionary) return reject(new Message('No dictionary found'));
                    if (dictionary.mutations[from] && itemkey !== from) return reject(new Message('Item already present', true));
                    if (from === to) return reject(new Message('Colors shall be different', true));
                    delete dictionary.mutations[itemkey];
                    dictionary.mutations[from] = to;
                    this.setState({ dictionaries: this.state.dictionaries });
                    resolve(new Message('Item successfully updted'));
                }, 600);
            })

        },
        removeDictionaryItem: (dictionaryName: string, itemkey: string) => {
            console.info('context - removing dictionary item ...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dictionary = this.findDictionary(dictionaryName);
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

    private findDictionary(dictionaryName: string): Dictionary | undefined {
        return this.state.dictionaries.find((dictionary: Dictionary) => dictionary.dictionaryName === dictionaryName) as Dictionary;
    }

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