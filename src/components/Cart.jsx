import React,{createContext,useReducer,useEffect} from 'react';
import './Cart.css';
import { products } from './products';
import ContextCart from './ContextCart';
import {reducer} from './reducer';
export const CartContext = createContext();

export const Cart = () => {
  //const[items,setItems] = useState(products);
const initialState = {
  items:products,
  totalprice:0,
  totalItems:0
}
const [state,dispatch] = useReducer(reducer,initialState);
//to delelte the individual item
const removeItem = (id) => {
    return dispatch({
    type:"REMOVE_ITEM",
    payload:id
    })
}

//clear items in the cart page
const clearCartItems = () => {
      return dispatch({
        type:"CLEAR_CART"
      });
}

// add quantity of products
  const addquantity = (id) => {
      return dispatch({
      type:"ADD_QUANTITY",
      payload:id
      });
  }

  // reduce quantity of products
  const minusquantity = (id) => {
      return dispatch({
        type:"MINUS_QUANTITY",
        payload: id
      });
  }

  // use useEffect for update the data
   useEffect(()=>{
    dispatch({ type:"GET_ToTAL" });
   },[state.items]);

  return (
    <CartContext.Provider value={{ ...state ,removeItem,clearCartItems,addquantity,minusquantity}}>
        <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
