import React from 'react'
import classes from '../../assets/css/Cart/Cart.module.css';
import Modal from '../UI/Modal';

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
        <Modal>
           {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>120</span>
            </div> 
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>   
                <button className={classes.button}>Order</button>
            </div> 
        </Modal>
    )
}

export default Cart
