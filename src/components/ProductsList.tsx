import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Product } from 'models/Models';

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
            <div className="col s12 m4" key={i}>
              <ProductCard product={el}></ProductCard>
            </div>
          )}
        </div>
    );
  }
}
export default ProductsList;