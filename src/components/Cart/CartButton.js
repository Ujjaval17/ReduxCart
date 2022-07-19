import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toggleActions } from '../../store/cartToggleSlice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const cartQuantity = useSelector(state=>state.cartUpdate.tquantity);
  
  const ToggleHandler = () => {
      dispatch(toggleActions.manageCart());
  }

  return (
    <button onClick={ToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
