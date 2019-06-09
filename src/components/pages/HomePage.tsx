
import React, { Component, Fragment } from 'react';
import './HomePage.scss';
import { ProductsConsumer } from 'providers/ProductsProvider';
import ProductsList from '../ProductsList';
import DictionariesProvider from '../../providers/DictionaryProvider';
import DictionarySelection from '../DictionarySelection';

class HomePage extends Component {


    state = {
        pageTitle: 'Product Store Backoffice'
    }

    render() {
        return (
            <DictionariesProvider>
                <ProductsConsumer>
                    {(context) => {
                        return (
                            <Fragment>
                                <div className="home-page-title">{this.state.pageTitle}</div>
                                <DictionarySelection></DictionarySelection>
                                <ProductsList productsList={context.productList}></ProductsList>
                            </Fragment>
                        )
                    }}
                </ProductsConsumer>
            </DictionariesProvider>
        )

    }

}


export default HomePage;