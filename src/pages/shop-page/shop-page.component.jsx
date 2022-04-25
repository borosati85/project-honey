import React, { useLayoutEffect } from 'react';
import { ShopPageContainer, ShopPageTitle, ShopProductsContainer } from './shop-page.styles';
import Product from '../../components/product/product.component';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuppliesStart } from '../../redux/shop/shop-actions';
import Spinner from '../../components/spinner/spinner.component';

const ShopPage = () => {
  const dispatch = useDispatch();

  useLayoutEffect(()=> {
    dispatch(fetchSuppliesStart());
  },[])

  const products = useSelector(state => state.shop.supplies);
  const fetching = useSelector(state => state.shop.isFetching);

  return (
    <ShopPageContainer id="shop">
      <ShopPageTitle>Termékeink</ShopPageTitle>
      <ShopProductsContainer>
      <Spinner isFetching={fetching}/>
        {          
         products.map((item) => <Product key={item.id} item={item}/>)
        }
      </ShopProductsContainer>
    </ShopPageContainer>
  )
}
export default ShopPage;