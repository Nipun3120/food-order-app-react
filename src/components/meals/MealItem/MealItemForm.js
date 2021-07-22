import React from 'react'
import classes from '../../../assets/css/Meals/MealItem/MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <Input label='Amount' input={{
                id:'amount',
                type: 'number',
                min: '1',
                max: '9',
                stpe: '1',
                defaultValue: '1'
            }}/>
                <button className={classes.button}>Add</button>
        </form>
    )
}

export default MealItemForm
