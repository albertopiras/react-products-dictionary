
import React, { Component, Fragment } from 'react';
import './HomePage.scss';

class HomePage extends Component {


    state = {
        pageTitle: 'Product Store Backoffice'
    }

    render() {
        return (
            <Fragment>
                <div className="home-page-title">{this.state.pageTitle}</div>
                <p>Pagina prodotti</p>
            </Fragment>
        )
    }

}


export default HomePage;