import React from 'react'
import classes from '../../assets/css/Cart/Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = 
    <ul className={classes['cart-item']}> {[
        {
            id: 'c1',
            name: 'Pizza',
            amount: '2',
            price: 100
        }].map(item=> <li>{item.name}</li>)}
    </ul>;




    return (
        <Modal onClickBackdrop={props.onHideDisplay}>
           {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>120</span>
            </div> 
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideDisplay}>Close</button>   
                <button className={classes.button}>Order</button>
            </div> 
        </Modal>
    )
}

export default Cart
