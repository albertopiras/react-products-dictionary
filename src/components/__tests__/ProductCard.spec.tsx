import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Product } from 'models/Models';
import ProductCard, { IProductCardProps } from 'components/ProductCard';

const mockProduct: Product =  {
  "id": 101,
  "name": "Apple iPhone 6s",
  "brand": "apple",
  "color": "#008000",
  "price": 769
};
let component: ShallowWrapper<IProductCardProps>;

describe('ColorRow', () => {
  beforeEach(() => {
    component = shallow<IProductCardProps>(<ProductCard product={mockProduct} />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should dispay the color TableCell', () => {

    expect(component.find('span.card-title')).toHaveLength(0);

  });
});
