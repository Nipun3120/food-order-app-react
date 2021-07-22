import React from 'react'
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/images/meals.jpg'
import classes from '../../assets/css/Layout/Header.module.css';

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Food Cart</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage}/>
            </div>
        </React.Fragment>
    )
}

export default Header
