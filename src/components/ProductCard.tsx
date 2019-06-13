import React, { Component } from 'react';
import './ProductCard.scss';
import { Product } from '../models/Models';
import { ColorDictionariesConsumer } from 'providers/ColorDictionariesProvider';

export interface IProductCardProps {
    product: Product;
}

class ProductCard extends Component<IProductCardProps> {

    render() {

        const {product} = this.props;
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
        );
    }
}
export default ProductCard;

