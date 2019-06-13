import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Product } from 'models/Models';

interface IProductsListParams {
  productsList: Product[];
  // onRemoveItem: (id: number) => void
}

class ProductsList extends Component<IProductsListParams> {

  render() {
    const { productsList } = this.props;

    return (
        <div className="row">
          {productsList.map((el, i) =>
            <div className="col s12 m4" key={i}>
              <ProductCard product={el}></ProductCard>
            </div>
          )}
        </div>
    );
  }
}
export default ProductsList;