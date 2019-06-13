import React, { Component } from 'react'
import axios from 'axios';
import { Product } from '../models/Models';

interface AppState {
    productList: Product[],
    getProduct(id: number): Product | null;
    removeProduct(id:number):void;
};

const initialState: AppState = {
    productList: [] as Product[],
    getProduct: (id: number) => null,
    removeProduct: (id:number) => {}
};

export const ProductsContext = React.createContext(initialState);

// Create an exportable consumer that can be injected into components
export const ProductsConsumer = ProductsContext.Consumer;

// Create the provider using a traditional Component class
class ProductsProvider extends Component {

    state = {
        productList: initialState.productList,
        getProduct: (id: number) => {
            console.log('context get product');
            const product = this.state.productList.find((product: Product) => product.id === id);
            return product ? product : null;
        },
       removeProduct: (id: number) => {
            console.log('context remove product');
            this.setState({productList: this.state.productList.filter((product:Product)=>product.id !== id)});
        }
    } as AppState;

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