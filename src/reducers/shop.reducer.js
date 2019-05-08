export const OPERATE_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const GET_PRODUCTS = 'GET_PRODUCTS';

const initialState = {
    products: [],
    cart: []
};

const shopReducer = (state = initialState, action ) => {
    let updatedCart;
    let updatedItemIndex;
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products:action.products}
        case OPERATE_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            let updatedItemIndex = updatedCart.findIndex(item => item.id == action.prodId)
            if(updatedItemIndex < 0){
                updatedCart.push({id:action.prodId, quantity:1})
            } else {
                let operation = action.operation;
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                operation == '+' ? updatedItem.quantity++ : updatedItem.quantity--;
                if(updatedItem.quantity == 0){
                    updatedCart.splice(updatedItemIndex, 1);
                } else {           
                    updatedCart[updatedItemIndex] = updatedItem;
                }
            }
            return {...state, cart: updatedCart};
        default:
            return state;
    }
}
export default shopReducer;