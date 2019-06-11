import React, { Component } from 'react';
import './ProductCard.scss';
import { Product } from '../models/Product';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';

interface IProductCardParams {
    product: Product;
}

class ProductCard extends Component<IProductCardParams> {

    // <Link to=”/”>Home</Link>
    render() {

        const product = this.props.product;
        console.log(product);
        return (
            <ColorDictionariesConsumer>
                {(context) => {
                    const mutatedColorHex = context.getColorMutation(product.color);

                    return (
                        <div className="card">
                            <div className="card-image">
                                <img src="assets/img/iphone.jpg" alt="smartphone"/>
                                <span className="card-title">{product.name}</span>
                            </div>
                            <div className="card-content" style={{ backgroundColor: mutatedColorHex }}>
                                <div>{context.getColorDescription(mutatedColorHex)}</div>
                                <div>CHF&nbsp;{product.price}</div>
                            </div>
                        </div>
                    )
                }}

            </ColorDictionariesConsumer>
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

