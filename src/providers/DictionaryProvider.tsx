import React, { Component } from 'react'
import axios from 'axios';

interface DictionaryState {
    // getDictionaryDescription(hex: string): string | null;
    getDictionaries: any;
    currentDictionary: string | null;
    activateDictionary: (newDictionary: string) => void
};

const dictionaries = [
    {
        dictionaryName: "dictionary 1",
        mutations: {
            "#008000": "#00FF00",
            "#008080": "#0000FF"
        }
    },
    {
        dictionaryName: "dictionary 2",
        mutations: {
            "#800080": "#FF00FF",
            "#008000": "#800000"
        }
    }
]

const initialState: DictionaryState = {
    getDictionaries: () => [],
    currentDictionary: null,
    activateDictionary: (newDictionary: string) => {}
};

export const DictionariesContext = React.createContext(initialState);

// Create an exportable consumer that can be injected into components
export const DictionariesConsumer = DictionariesContext.Consumer

// Create the provider using a traditional Component class
class DictionariesProvider extends Component {

    state = {
        currentDictionary: null,
        activateDictionary: (newDictionary: string) => {
            console.log("context activate dictionary");
            this.setState({currentDictionary: newDictionary})
        },
        getDictionaries: () => {
            return dictionaries;
        }
    } as DictionaryState;

    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <DictionariesContext.Provider value={this.state}>
                {this.props.children}
            </DictionariesContext.Provider>
        )
    }
}
export default DictionariesProvider;