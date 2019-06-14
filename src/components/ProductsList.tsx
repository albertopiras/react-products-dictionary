import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Product } from 'models/Models';

export interface IProductsListProps {
  productsList: Product[];
  // onRemoveItem: (id: number) => void
}

class ProductsList extends Component<IProductsListProps> {

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