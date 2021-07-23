import React from 'react'
import classes from '../../assets/css/Cart/Cart.module.css';

const Cart = () => {
    const cartItems = 
    <ul className={classes['cart-item']}> {[
        {
            id: 'c1',
            name: 'Pizza',
            amount: '2',
            prize: 100
        }].map(item=> <li>{item.name}</li>)}
    </ul>;

    return (
        <div>
           {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>120</span>
            </div> 
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>   
                <button className={classes.button}>Order</button>
            </div> 
        </div>
    )
}

export default Cart
