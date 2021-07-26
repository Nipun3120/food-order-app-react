import classes from '../../assets/css/Cart/CartItem.module.css';


const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const totalItemPrice = props.amount*props.price;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.mealName}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        {/* <div className={classes.price}>{totalItemPrice}</div> */}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveItem}>−</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
