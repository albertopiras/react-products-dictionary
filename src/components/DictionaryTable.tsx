import React, { Component } from 'react';
import { Dictionary, Message } from '../models/Models';

import MaterialTable, { Column } from 'material-table';
import { MessagesContext } from 'providers/MessagesProvider';
import './DictionaryTable.scss';
import { Button, Icon } from '@material-ui/core';

interface IDictionaryTableParams {
    dictionary: Dictionary;
    colors: { [S: string]: string };
    onAddItem: (dictionaryName: string, from: string, to: string) => Promise<Message>;
    onUpdateItem: (dictionaryName: string, itemkey: string, from: string, to: string) => Promise<Message>;
    onRemoveItem: (dictionaryName: string, itemkey: string) => Promise<Message>;
    onDeleteDictionary: (dictionaryName: string) => Promise<Message>;
}

class DictionaryTable extends Component<IDictionaryTableParams> {
    static contextType = MessagesContext;

    columns = [
        { title: 'from', field: 'from', lookup: this.props.colors },
        { title: 'to', field: 'to', lookup: this.props.colors },

    ] as Column[];

    addDictionaryItem = (dictionaryName: string, from: string, to: string) => {
        return this.props.onAddItem(dictionaryName, from, to).then((response) => {
            this.context.newSuccessMessage(response.content);
        }, (error) => {
            this.context.newErrorMessage(error.content);
        });
    }

    updateItem = (dictionaryName: string, itemKey: string, from: string, to: string) => {
        return this.props.onUpdateItem(dictionaryName, itemKey, from, to).then((response) => {
            this.context.newSuccessMessage(response.content);
        }, (error) => {
            this.context.newErrorMessage(error.content);
        });
    }

    removeItem = (dictionaryName: string, itemKey: string) => {
        return this.props.onRemoveItem(dictionaryName, itemKey).then((response) => {
            this.context.newSuccessMessage(response.content);
        }, (error) => {
            this.context.newErrorMessage(error.content);
        });
    }

    deleteDictionary = () => {
        return this.props.onDeleteDictionary(this.props.dictionary.dictionaryName).then((response) => {
            this.context.newSuccessMessage(response.content);
        }, (error) => {
            this.context.newErrorMessage(error.content);
        });
    }
    render() {

        return (
            <div className="dictionary-table">
                <MaterialTable
                    title={this.props.dictionary.dictionaryName}
                    columns={this.columns}
                    options={{
                        actionsColumnIndex: -1
                    }}
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
                <div className="remove-dictionary">
                    <Button variant="contained" size="small" onClick={this.deleteDictionary} className="warning-btn">
                        <Icon>delete</Icon>
                        Delete
                    </Button>
                </div>
            </div>
        );
    }
}
export default DictionaryTable;



