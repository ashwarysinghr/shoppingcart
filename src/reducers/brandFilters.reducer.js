import {ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER} from "../actions";
import { GET_BRANDS } from "../actions/filters";

const initialState = {
    brands:[],
    selectedBrands:[]
};

export const brandReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_BRANDS:
            return {...state, brands:action.brands};
        case ADD_BRAND_TO_FILTER:
            let selectedBrands = state.selectedBrands;
            selectedBrands.push(action.brand);
            return {...state, selectedBrands:selectedBrands};
        case REMOVE_BRAND_FROM_FILTER:
            selectedBrands = state.selectedBrands;
            selectedBrands = selectedBrands.filter((brand) => {
                return brand != action.brand
            })
            return {...state, selectedBrands:selectedBrands};
        default:
            return state;
    }
}