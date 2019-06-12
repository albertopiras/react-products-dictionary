import React, { Component } from 'react';
import { Dictionary } from '../models/Models';
import DictionaryTable from './DictionaryTable';

interface IDictionaryListParams {
  dictionariesList: Dictionary[];
}

class DictionaryList extends Component<IDictionaryListParams> {

  render() {
    return (
        <div className="row">
          {this.props.dictionariesList.map((el, i) =>
            <div className="col s12 m4" key={i}>
              <DictionaryTable dictionary={el}></DictionaryTable>
            </div>
          )}
        </div>
    );
  }
}
export default DictionaryList;