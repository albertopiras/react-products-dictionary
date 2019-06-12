import React, { Component } from 'react';
// import './Dictionary.scss';
import { Product, Dictionary } from '../models/Models';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';

interface IDictionaryTableParams {
    dictionary: Dictionary;
}

class DictionaryTable extends Component<IDictionaryTableParams> {

    render() {

        const dictionary = this.props.dictionary;
        console.log(dictionary);
        return (
            <ColorDictionariesConsumer>
                {(context) => {
                    return (
                       
                        <div>name:{dictionary.dictionaryName}</div>
                    )
                }}

            </ColorDictionariesConsumer>
            // <li className="collection-item avatar" key={i}>
            //   <i className="material-icons circle green">insert_chart</i>
            //     <span>{el.name}</span>
            //     <span>{el.color}</span>
            //   <a href="#!" onClick={() => this.props.onRemoveItem(el.id)} className="secondary-content"><i className="material-icons">delete</i></a>
            // </li >
        );
    }
}
export default DictionaryTable;

