import React, { Component, Fragment} from 'react';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';
import DictionaryList from 'components/DictionaryList';
import AddDictionary from 'components/AddDictionary';

class DictionariesPage extends Component {

    state ={
        pageTitle:'Available Dictionaries'
    }
    render() {
        return (
            <ColorDictionariesConsumer>
            {(context) => {
                return (
                    <Fragment>
                        <div className="page-title">{this.state.pageTitle}</div>
                        <DictionaryList></DictionaryList>
                        <AddDictionary onAddDictionary={context.createDictionary}></AddDictionary>
                    </Fragment>
                )
            }}
        </ColorDictionariesConsumer>
        )
    }

}


export default DictionariesPage;