
import React, { Component, Fragment } from 'react';
import './HomePage.scss';
import { ProductsConsumer } from 'providers/ProductsProvider';
import ProductsList from '../ProductsList';
import DictionarySelection from '../DictionarySelection';

interface IHomeState{
    pageTitle:string;
}

class HomePage extends Component<object,IHomeState> {

    state = {
        pageTitle: 'Product Store Backoffice'
    }

    render() {
        return (
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
        )

    }

}


export default HomePage;