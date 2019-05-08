import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {brandReducer} from './brandFilters.reducer';
import {priceReducer} from './priceFilter.reducer';
export default combineReducers({
    shop,
    brandfilters:brandReducer,
    pricefilters:priceReducer
})