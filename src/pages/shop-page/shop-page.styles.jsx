import styled from 'styled-components';
import './shop.styles.scss';

const ShopPageContainer = styled.section`
    padding: 60px 40px;    
    min-height: 100vh;   
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(50,50,50);
`

const ShopPageTitle = styled.h1`
    font-family: 'Pushster', cursive;
    text-shadow: 2px 2px #000000;
    font-size: calc(2vw + 25px);
    letter-spacing: 2px;
    color: #DDC9BC;
    width: fit-content;
`

const ShopProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;   
`

export { ShopPageContainer, ShopPageTitle, ShopProductsContainer }