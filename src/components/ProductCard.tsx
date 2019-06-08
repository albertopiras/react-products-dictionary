import React, { Component } from 'react';
import './ProductCard.scss';
import { Product } from '../models/Product';
import { ColorsConsumer } from '../providers/ColorProvider';

interface IProductCardParams {
    product: Product;
}

class ProductCard extends Component<IProductCardParams> {

    // <Link to=”/”>Home</Link>
    render() {

        const product = this.props.product;
        console.log(product);
        return (
            <ColorsConsumer>
                {(context) => {
                    return (
                        <div className="card">
                            <div className="card-image">
                                <img src="assets/img/iphone.jpg" />
                                <span className="card-title">{product.name}</span>
                            </div>
                            <div className="card-content">
                                <p>{product.price}</p>
                            </div>
                            <div className="card-action">
                                Color: {context.getColorDescription(product.color)}
                            </div>
                        </div>
                    )
                }}

            </ColorsConsumer>
            // <li className="collection-item avatar" key={i}>
            //   <i className="material-icons circle green">insert_chart</i>
            //     <span>{el.name}</span>
            //     <span>{el.color}</span>
            //   <a href="#!" onClick={() => this.props.onRemoveItem(el.id)} className="secondary-content"><i className="material-icons">delete</i></a>
            // </li >
        );
    }
}
export default ProductCard;

