import React, { useState } from 'react';
import { ProductContainer, ProductImageContainer, ProductImage, ProductTextContainer, ProductTitle, ProductPrice, ProductDescription, ProductButtonContainer, ProductInput } from './product.styles'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const Product = ({item, addItem}) => {
    const [quantity, setQuantity] = useState(1);

    const { title, price, description, imageURL } = item;
    return (
        <ProductContainer>
            <ProductImageContainer>
                <ProductImage src={imageURL}/>
            </ProductImageContainer>
            <ProductTextContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>{price} Ft</ProductPrice>
                <ProductDescription>{description}</ProductDescription>
                <ProductButtonContainer>                
                    <ProductInput type="number" placeholder="1" min="1" max="99" onChange={(e)=> setQuantity(Number(e.target.value))}/>
                    <CustomButton onClick={() => {
                        addItem({...item, quantity})
                        }}>
                        Kosárba
                    </CustomButton>
                </ProductButtonContainer>
            </ProductTextContainer>
        </ProductContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Product);