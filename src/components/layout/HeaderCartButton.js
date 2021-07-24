import React from 'react';
import CartIcon from '../cart/CartIcon';
import classes from '../../assets/css/Layout/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton
