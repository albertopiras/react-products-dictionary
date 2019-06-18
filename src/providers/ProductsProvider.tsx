import React, { Component } from 'react'
import axios from 'axios';
import { Product } from '../models/Models';

interface IProductsState {
    productList: Product[],
    getProduct(id: number): Product | null;
    removeProduct(id: number): void;
};

export const ProductsContext = React.createContext({} as IProductsState);

// Create an exportable consumer that can be injected into components
export const ProductsConsumer = ProductsContext.Consumer;

// Create the provider using a traditional Component class
class ProductsProvider extends Component {

    state = {
        productList: [] as Product[],
        getProduct: (id: number) => {
            console.log('context get product');
            const product = this.state.productList.find((product: Product) => product.id === id);
            return product ? product : null;
        },
        removeProduct: (id: number) => {
            console.log('context remove product');
            this.setState((prevState: IProductsState) => ({ productList: prevState.productList.filter((product: Product) => product.id !== id) }));
        }
    } as IProductsState;

    /**retrieves data from server */
    componentWillMount() {
        axios.get('./assets/products.json').then((response) => {
            setTimeout(() => {
                console.log('data retrieved ', response);
                this.setState({ productList: response.data.productList })
            }, 500);
        });
    }

    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <ProductsContext.Provider value={this.state}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}
export default ProductsProvider;