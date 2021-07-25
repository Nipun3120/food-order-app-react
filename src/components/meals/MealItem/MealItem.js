import React, {useContext} from 'react'
import CartContext from '../../../store/Cart-context'; 
import classes from '../../../assets/css/Meals/MealItem/MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const onAddToCart= (amount)=> {
        cartCtx.addItem({
            id: props.id,
            mealName: props.mealName,
            amount: amount,
            price: props.price
        })
    };

    return <li className={classes.meal}>
        <div>
            <h3>{props.mealName}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>

        <div>
            <MealItemForm onAddToCart={onAddToCart} />
        </div>
    </li>
}

export default MealItem
