import {ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER} from "../actions";
import { CHANGE_PRICE } from "../actions/filters";

const initialState = {
    price: {
        min:0,
        max:5000
    }
};

export const priceReducer = (state = initialState, action ) => {
    switch (action.type) {
        case CHANGE_PRICE:
            const {min, max} = action.price;
            let price = {...state.price, min:min, max:max}
            return {...state, price:price};
        default:
            return state;
    }
}