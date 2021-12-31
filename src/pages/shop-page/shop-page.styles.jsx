import styled from 'styled-components';

const ShopPageContainer = styled.section`
    padding: 60px 40px;    
    min-height: 100vh;   
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(50,50,50);
`

const ShopPageTitle = styled.h1`
    font-family: 'Architects Daughter', cursive;
    text-transform: uppercase;
    letter-spacing: 2vw;
    font-size: calc(2vw + 25px);
    color: white;
    width: fit-content;
    background-color: black;
`

const ShopProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;   
`

export { ShopPageContainer, ShopPageTitle, ShopProductsContainer }