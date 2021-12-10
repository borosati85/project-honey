import React from 'react';
import './shop.styles.scss';
import Product from '../../components/product/product.component';
import getProducts from '../../data/data.js';

const ShopPage = () => {
  const products = getProducts();
  return (
    <section className="shop" id="shop">
      <h1 className="shop__header">Shop</h1>
      <div className="shop__products">
        {
          products.map((item) => <Product key={item.id} item={item}/>)
        }
      </div>
    </section>
  )

}
export default ShopPage;