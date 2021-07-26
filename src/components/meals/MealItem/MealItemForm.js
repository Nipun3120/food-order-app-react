import React, {useRef, useState} from 'react'
import classes from '../../../assets/css/Meals/MealItem/MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {

    const inputAmountRef = useRef();
    const [amountValid, setAmountValid] = useState(true);
    

    const addItemToCartHandler = (event) => {
        event.preventDefault();
    
        const enteredAmount = inputAmountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
    
        if (
          enteredAmount.trim().length === 0 ||
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5
        ) {
            setAmountValid(false);
          return;
        }
    
        console.log(enteredAmountNumber);
        props.onAddToCart(enteredAmountNumber);
      };

    

    return (
        <form className={classes.form} onSubmit={addItemToCartHandler}>
            <Input 
                ref={inputAmountRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '9',
                    stpe: '1',
                    defaultValue: '1'   
            }}/>
                <button className={classes.button} type='submit'>Add</button>
                {!amountValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm
