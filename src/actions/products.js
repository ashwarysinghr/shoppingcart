import {phones} from '../data/phones';
export const OPERATE_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const dispatchGetProducts = () => {
    return {
        type: GET_PRODUCTS,
        products:phones
    }
};

export const fetchProducts = (dispatch) => {
    return function (dispatch) {
        dispatch(dispatchGetProducts())
    }
}
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const operateProductToCart = (prodId, operation) => {
    return {
        type: OPERATE_PRODUCT_TO_CART,
        prodId,
        operation
    }
  }