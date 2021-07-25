import {useReducer} from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

import CartContext from "./Cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};


const cartReducer = (state, action)=> {
    if(action.type === 'ADD_TO_CART') {
        const itemsInCart = state.items.concat(action.item);
        const itemsTotalAmount = state.totalAmount + action.item.price * action.item.count;
        return {
            items: itemsInCart,
            totalAmount: itemsTotalAmount
        }

    } else if(action.type === 'REMOVE_FROM_CART'){
        
    }
    return defaultCartState; 
}

const CartProvider = (props)=> {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item)=> {
        dispatchCart({
            type: 'ADD_TO_CART',
            item: item
        })
    };

    const removeItemFromCart = (id)=> {
        dispatchCart({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    };

    return <CartContext.Provider value={cartContext }>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;