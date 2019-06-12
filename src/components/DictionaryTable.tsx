import React, { Component, Fragment } from 'react';
// import './Dictionary.scss';
import { Dictionary, Message } from '../models/Models';

import MaterialTable, { Column } from 'material-table';

interface IDictionaryTableParams {
    dictionary: Dictionary;
    colors: any[];
    onAddItem: (dictionaryName: string, from: string, to: string) => Promise<any>;
    onUpdateItem: (dictionaryName: string, itemkey: string, from: string, to: string) => Promise<any>;
    onRemoveItem: (dictionaryName: string, itemkey: string) => Promise<any>;

}

class DictionaryTable extends Component<IDictionaryTableParams> {

    columns = [
        { title: 'from', field: 'from', lookup: this.props.colors },
        { title: 'to', field: 'to', lookup: this.props.colors },

    ] as Column[];

    addDictionaryItem(dictionaryName: string, from: string, to: string) {
        return this.props.onAddItem(dictionaryName, from, to);
    }

    updateItem(dictionaryName: string, itemKey: string, from: string, to: string) {
        return this.props.onUpdateItem(dictionaryName, itemKey, from, to);
    }

    removeItem(dictionaryName: string, itemKey: string) {
        return this.props.onRemoveItem(dictionaryName, itemKey);
    }
    render() {

        return (
            <Fragment>
                <MaterialTable
                    title={this.props.dictionary.dictionaryName}
                    columns={this.columns}
                    data={Object.keys(this.props.dictionary.mutations).map((item) => {
                        return {
                            from: item,
                            to: this.props.dictionary.mutations[item]
                        }
                    })}
                    editable={{
                        onRowAdd: newData => this.addDictionaryItem(this.props.dictionary.dictionaryName, newData.from, newData.to),
                        onRowUpdate: (newData, oldData) => this.updateItem(this.props.dictionary.dictionaryName, oldData.from, newData.from, newData.to),
                        onRowDelete: oldData =>
                            this.removeItem(this.props.dictionary.dictionaryName, oldData.from)
                    }}
                />
            </Fragment>
        );
    }
}
export default DictionaryTable;



