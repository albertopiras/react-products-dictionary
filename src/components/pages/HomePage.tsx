
import React, { Component, Fragment } from 'react';
import './HomePage.scss';
import { ProductsConsumer } from 'providers/ProductsProvider';

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
                            <p>Pagina prodotti</p>
                            Products:{context.productList.length}
                        </Fragment>
                    )
                }}
            </ProductsConsumer>
        )

    }

}


export default HomePage;