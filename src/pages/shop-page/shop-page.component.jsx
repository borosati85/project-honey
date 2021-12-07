import React from 'react';
import './shop.styles.scss';
import Product from '../../components/product/product.component';
import products from '../../data/data.js';

const ShopPage = () => {
  return (
    <section className="shop" id="shop">
      <h1 className="shop__header">Shop</h1>
      <div className="shop__products">
        {
          products.map(({id, ...otherProps}) => <Product key={id} {...otherProps}/>)
        }
      </div>
    </section>
  )

}
export default ShopPage;