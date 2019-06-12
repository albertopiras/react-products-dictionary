import React, { Component, Fragment} from 'react';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';
import DictionaryList from 'components/DictionaryList';

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
                        <div className="home-page-title">{this.state.pageTitle}</div>
                        <DictionaryList dictionariesList={context.dictionaries}></DictionaryList>
                    </Fragment>
                )
            }}
        </ColorDictionariesConsumer>
        )
    }

}


export default DictionariesPage;