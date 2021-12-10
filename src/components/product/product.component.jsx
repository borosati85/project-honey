import React from 'react';
import './product.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

const Product = ({item, addItem}) => {
    const { title, description, imageURL } = item;
    return (
        <div className="product">
            <div className="product__image-container">
                <img className="product__image" src={imageURL}/>
            </div>
            <div className="product__text">
                <h3 className="product__title">{title}</h3>
                <p className="product__description">{description}</p>
                <div className="product__button-container">                
                    <input className="product__input" type="number" placeholder="1" min="1" max="20"></input>
                    <CustomButton onClick={() => addItem(item)}>Kosárba</CustomButton>
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Product);