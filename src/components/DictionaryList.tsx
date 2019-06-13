import React, { Component } from 'react';
import DictionaryTable from './DictionaryTable';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';
import AlertBox from './AlertBox';

class DictionaryList extends Component {

  render() {

    return (
      <ColorDictionariesConsumer>
        {(context) => {
          let results;
          if (context.getDictionaries().length > 0) {
            results = context.getDictionaries().map((el: any, i: number) =>
              <div className="col s12 m4" key={i}>
                <DictionaryTable dictionary={el} colors={context.getColorList()} onDeleteDictionary={context.deleteDictionary} onAddItem={context.addDictionaryItem} onUpdateItem={context.updateDictionaryItem} onRemoveItem={context.removeDictionaryItem}></DictionaryTable>
              </div>
            )
          } else {
            results = <AlertBox message="No item found"></AlertBox>
          }
          return (
            <div className="row">
              {results}
            </div>
          )
        }}
      </ColorDictionariesConsumer>
    );
  }
}
export default DictionaryList;