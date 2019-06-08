
import React, { Component, Fragment } from 'react';
import './HomePage.scss';
import { ProductsConsumer } from 'providers/ProductsProvider';
import ProductsList from '../ProductsList';

class HomePage extends Component {


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
                            <ProductsList productsList={context.productList}></ProductsList>
                        </Fragment>
                    )
                }}
            </ProductsConsumer>
        )

    }

}


export default HomePage;