import React, {useContext} from 'react';
import CartContext from '../../store/Cart-context';

import CartIcon from '../cart/CartIcon';
import classes from '../../assets/css/Layout/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((totalItems, item)=> {
        return totalItems + item.amount;
    }, 0);


    return (
        <button className={classes.button} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton
