import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Product } from 'models/Models';
import ProductsList, { IProductsListProps } from 'components/ProductsList';
import ProductCard from 'components/ProductCard';

const mockList: Product[] = [{
  "id": 101,
  "name": "Apple iPhone 6s",
  "brand": "apple",
  "color": "#008000",
  "price": 769
},
{
  "id": 102,
  "name": "Samsung Galaxy S8",
  "brand": "samsung",
  "color": "#008080",
  "price": 569
}];
let component: ShallowWrapper<IProductsListProps>;

jest.mock('providers/ColorDictionariesProvider');

describe('ProductList', () => {
  beforeEach(() => {
    component = shallow<IProductsListProps>(<ProductsList productsList={mockList} />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it(`should dispay ${mockList.length} Product Cards`, () => {
    expect(component.find(ProductCard)).toHaveLength(mockList.length);
  });


});


