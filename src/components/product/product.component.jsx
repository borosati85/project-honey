import React from 'react';
import './product.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import products from '../../data/data.js';

const Product = ({ title, description, imageURL }) => (
    <div className="product">
        <div className="product__image-container">
            <img className="product__image" src={imageURL}/>
        </div>
        <div className="product__text">
            <h3 className="product__title">{title}</h3>
            <p className="product__description">{description}</p>
            <CustomButton>Kosárba</CustomButton>
        </div>
    </div>
)

export default Product;