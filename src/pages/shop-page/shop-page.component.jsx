import React from 'react';
import { ShopPageContainer, ShopPageTitle, ShopProductsContainer } from './shop-page.styles';
import Product from '../../components/product/product.component';
import getProducts from '../../data/data.js';

const ShopPage = () => {
  const products = getProducts();
  return (
    <ShopPageContainer id="shop">
      <ShopPageTitle>Shop</ShopPageTitle>
      <ShopProductsContainer>
        {
          products.map((item) => <Product key={item.id} item={item}/>)
        }
      </ShopProductsContainer>
    </ShopPageContainer>
  )
}
export default ShopPage;