import styled from "styled-components";

const ProductContainer = styled.div`
    border: 5px solid orange;    
    display: flex;
    flex-direction: column;
    max-width: 300px;
`

const ProductImageContainer = styled.div`
    height: fit-content;
`

const ProductImage = styled.img`
    width: 100%;
`

const ProductTextContainer = styled.div`
    width: 100%;
    padding: 10px;
    background-color: rgb(75, 75, 75);
`

const ProductTitle = styled.h3`
    text-align: center;
    color: #ddc9bc;
`

const ProductPrice = styled.h3`
    text-align: center;
    color: #ddc9bc;
`

const ProductDescription = styled.p`
    text-align: center;
    color: #ddc9bc;
`

const ProductButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
`

const ProductInput = styled.input`
    width: 50px;
`

export { ProductContainer, ProductImageContainer, ProductImage, ProductTextContainer, ProductTitle, ProductPrice, ProductDescription, ProductButtonContainer, ProductInput }