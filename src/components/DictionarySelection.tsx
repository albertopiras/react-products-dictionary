import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../models/Product';
import { DictionariesConsumer } from '../providers/DictionaryProvider';
import Fragment from 'react';

class DictionarySelection extends Component {



  render() {
    return (
      <DictionariesConsumer>
        {(context) => {
          
          function handleClick(newDictionary: string){
            context.activateDictionary(newDictionary);
          }
          return (
            <div>
              {context.getDictionaries().map((el: any, i: number) =>
                <button key={i} onClick={()=>handleClick(el.dictionaryName)}>
                  {el.dictionaryName}
                </button>
              )}
            </div>
          )
        }}
      </DictionariesConsumer>
    );
  }
}
export default DictionarySelection;