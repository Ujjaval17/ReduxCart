import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux/es/exports';
import { cartUpdateActions } from '../../store/cartUpdateSlice';


const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();
  const addCartHandler = () => {
      dispatch(cartUpdateActions.addItem({
        id,
        title,
        price
      }));
  };

  const removeCartHandler = () => {
    dispatch(cartUpdateActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
