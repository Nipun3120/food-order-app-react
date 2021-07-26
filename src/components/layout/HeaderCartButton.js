import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/Cart-context';

import CartIcon from '../cart/CartIcon';
import classes from '../../assets/css/Layout/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [buttonIsHighligthed, setButtonIsHishligthed] = useState(false);
    const cartCtx = useContext(CartContext);
    const btnClasses = `${classes.button} ${buttonIsHighligthed ? classes.bump: ''}`;
    
    const { items } = cartCtx;

    useEffect(()=> {
        if(items.length === 0) {
            return;
        }

        setButtonIsHishligthed(true);

        const timer = setTimeout(()=> {
            setButtonIsHishligthed(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
        
    }, [items]);

    const numberOfItems = cartCtx.items.reduce((totalItems, item)=> {
        return totalItems + item.amount;
    }, 0);


    return (
        <button className={btnClasses} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton
