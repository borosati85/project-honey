import React from 'react';
import './product.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const Product = ({ title, description, imageURL }) => (
    <div className="product">
        <div className="product__image-container">
            <img className="product__image" src={imageURL}/>
        </div>
        <div className="product__text">
            <h3 className="product__title">{title}</h3>
            <p className="product__description">{description}</p>
            <div className="product__button-container">                
                <input className="product__input" type="number" placeholder="1" min="1" max="20"></input>
                <CustomButton >Kosárba</CustomButton>
            </div>

        </div>
    </div>
)

export default Product;