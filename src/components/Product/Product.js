import './Product.scss';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatCurrency} from '../../Pipes/currencyFormatter';
import {operateProductToCart} from "../../actions/products";

function operateCart(props, id, operation){
    props.dispatch(operateProductToCart(id, operation));
    let snackbarContent = `${props.data.title} ${operation == '+'? 'has been added' : 'has been removed'}`;
    props.showConfirmationMessage(snackbarContent);
}
const showQuantity = (productObj, props) => {
    const {addedToCart, quantity, id} = productObj;
    return (
        !addedToCart ? <button
            onClick={() => {
                operateCart(props, id, '+')
            }}
            className="btn btn-info product__add-to-cart">Add to cart
        </button>
        :
        <div className={`quantity`}>
            <button className="plus-btn quantityBtn" onClick={() => {
                operateCart(props, id, '+')
            }} type="button" name="button">
                +
            </button>
            <input type="text" name="name" value={quantity}/>
            <button className="minus-btn quantityBtn" onClick={() => {
                operateCart(props, id, '-')
            }} type="button" name="button">
                -
            </button>
        </div>
    )
}
const Product = (props) => {
    const {data, cart} = props;
    const {title, description, price, images, id} = data;
    let addedToCart = cart.find((item) => {
        return item.id == id;
    });
    let quantity;
    if(addedToCart){
        quantity = addedToCart.quantity;
    }
    addedToCart = !addedToCart ? false : true;
    let productObj = {
        quantity:quantity,
        addedToCart:addedToCart,
        id:id
    }
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 product">
                <Link className="product__link" to={`/products/${id}`}>
                    <img className="card-img-top product__img" src={images[0]} alt={title}/>
                    </Link>
                    <div className="card-body product__text">
                        <h4 className="card-title product__title">
                            <Link to={`/products/${id}`}>{title}</Link>
                        </h4>
                        <h5 className="product__price">{formatCurrency(price)}</h5>
                        <p className="card-text product__description">{description}</p>
                       {showQuantity(productObj,props)}
                    </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart }
};
export default connect(mapStateToProps, null)(Product);