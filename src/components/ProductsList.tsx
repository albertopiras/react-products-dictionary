import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../models/Product';

interface IProductsListParams {
  productsList: Product[];
  // onRemoveItem: (id: number) => void
}

class ProductsList extends Component<IProductsListParams> {

  // <Link to=”/”>Home</Link>
  render() {
    return (
        <div className="row">
          {this.props.productsList.map((el, i) =>
            <div className="col s12 m4">
              <ProductCard product={el}></ProductCard>
            </div>
          )}
        </div>
    );
  }
}
export default ProductsList;