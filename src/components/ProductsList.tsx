import React, { Component } from 'react';

interface IProductsListParams {
  productsList: Product[];
  onRemoveItem: (id: number) => void
}

class ProductsList extends Component<IProductsListParams> {

  // <Link to=”/”>Home</Link>
  render() {
    return (
      <ul id="productsList" className="collection">
        {this.props.productsList.map((el, i) =>
          <li className="collection-item avatar" key={i}>
            <i className="material-icons circle green">insert_chart</i>
              <span>{el.name}</span>
              <span>{el.color}</span>
            <a href="#!" onClick={() => this.props.onRemoveItem(el.id)} className="secondary-content"><i className="material-icons">delete</i></a>
          </li >
        )}
      </ul>
    );
  }
}
export default ProductsList;