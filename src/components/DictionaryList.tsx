import React, { Component } from 'react';
import { Dictionary } from '../models/Models';
import DictionaryTable from './DictionaryTable';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';

interface IDictionaryListParams {
  dictionariesList: Dictionary[];
}

class DictionaryList extends Component<IDictionaryListParams> {

  render() {
    return (
      <ColorDictionariesConsumer>
        {(context) => {
          return (
            <div className="row">

              {Object.keys(context.getDictionaries()).map((el: any, i: number) =>
                <div className="col s12 m4" key={i}>
                  <DictionaryTable dictionary={context.getDictionaries()[el]} colors={context.getColorList()} onAddItem={context.addDictionaryItem} onUpdateItem={context.updateDictionaryItem} onRemoveItem={context.removeDictionaryItem}></DictionaryTable>
                </div>
              )}

            </div>
          )
        }}
      </ColorDictionariesConsumer>
    );
  }
}
export default DictionaryList;