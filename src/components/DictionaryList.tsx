import React, { Component } from 'react';
import DictionaryTable from './DictionaryTable';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';

class DictionaryList extends Component {

  render() {
    return (
      <ColorDictionariesConsumer>
        {(context) => {
          return (
            <div className="row">

              {Object.keys(context.getDictionaries()).map((el: any, i: number) =>
                <div className="col s12 m4" key={i}>
                  <DictionaryTable dictionary={context.getDictionaries()[el]} colors={context.getColorList()} onDeleteDictionary={context.deleteDictionary} onAddItem={context.addDictionaryItem} onUpdateItem={context.updateDictionaryItem} onRemoveItem={context.removeDictionaryItem}></DictionaryTable>
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