import {brands} from '../data/brands';
export const ADD_BRAND_TO_FILTER = 'ADD_BRAND_TO_FILTER';
export const REMOVE_BRAND_FROM_FILTER = 'REMOVE_BRAND_FROM_FILTER';
export const CHANGE_PRICE = 'CHANGE_PRICE';
export const GET_BRANDS = 'GET_BRANDS';

export const dispatchBrands = () => {
    return {
        type: GET_BRANDS,
        brands:brands
    }
};

export const fetchBrands = (dispatch) => {
    return function (dispatch) {
        dispatch(dispatchBrands())
    }
}
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const addBrandToFilter = brand => {
    return {
        type: ADD_BRAND_TO_FILTER,
        brand
    }
};

export const removeBrandFromFilter = brand => {
    return {
        type: REMOVE_BRAND_FROM_FILTER,
        brand
    }
};

export const changePrice = price => {
    return {
        type: CHANGE_PRICE,
        price
    }
};