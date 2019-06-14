import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { mount } from 'enzyme';
import { Product } from 'models/Models';
import ProductCard, { IProductCardProps } from 'components/ProductCard';
import colorProviderContext from 'providers/__mocks__/colorDictionaryContext';
// import { when } from 'jest-when';

const mockProduct: Product =  {
  "id": 101,
  "name": "Apple iPhone 6s",
  "brand": "apple",
  "color": "#008000",
  "price": 769
};
let component: ShallowWrapper<IProductCardProps>;


jest.mock('providers/ColorDictionariesProvider');
// when(colorProviderContext.getColorMutation).calledWith(mockProduct.color).mockReturnValue('#ffffff');

describe('Product card', () => {

  beforeEach(() => {
    component = mount(<ProductCard product={mockProduct} />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should dispay one card title', () => {

    expect(component.find('.card-title')).toHaveLength(1);

  });

  
  it('should dispay  a card title with the proper Product name', () => {

    expect(component.find('.card-title').text()).toEqual(mockProduct.name);

  });

  
  it('should call getColorDescription method of ColorDictionaryProvider context', () => {

    expect(colorProviderContext.getColorDescription.mock.calls.length).toBe(1);

  });

  it('should dispay the product price', () => {

    expect(component.find('.product-price').text()).toContain(mockProduct.price);

  });


  it('should getColorMutation to retrieve the hex color', () => {

    expect(colorProviderContext.getColorMutation.mock.calls.length).toBe(1);

  });


});