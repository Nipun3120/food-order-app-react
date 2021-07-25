import React, {useRef, useState} from 'react'
import classes from '../../../assets/css/Meals/MealItem/MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {

    const inputAmountRef = useRef();
    const [amountValid, setAmountValid] = useState(true);
    

    const addItemToCartHandler = (event)=> {
        event.preventDefault();
        const a = event.target.value;
        console.log(a)
        const enteredAmount = '1 ';
        const enteredAmountCount = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountCount < 1 || enteredAmountCount > 8) {
            setAmountValid(false);
            return;
        }
        
        props.onAddToCart(enteredAmountCount);
    };

    

    return (
        <form className={classes.form} onSubmit={addItemToCartHandler}>
            <Input label='Amount' input={{
                ref:{inputAmountRef},
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '9',
                stpe: '1',
                defaultValue: '1'
            }}/>
                <button className={classes.button} >Add</button>
                {!amountValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm
