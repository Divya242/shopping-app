import React,{ useContext }from 'react';
import ThumbsUpBlack from '../assests/icons/ThumbsUpBlack.svg';
import Cartlogo from '../assests/icons/cart-logo.svg';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { CartContext } from './Cart';

const ContextCart = () => {
  const { items ,clearCartItems,totalItems,totalprice} = useContext(CartContext);

  if(items.length === 0) {
    return (
      <>
      <header>
        <div className="continue-shopping">
          <img src={ThumbsUpBlack} alt="thumsup" className="thumb-icon"/>
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src={Cartlogo} alt="cart" className="cart-logo"/>
          <span  className="number-logo">0</span>

        </div>
        <hr/>
      </header>
      <section className="main-app">
        <h5 className="shoppinglabel">Shopping cart</h5>
        <p className="additems">You have <span>0</span> items in Shopping cart</p>
  </section>
     </>
    )
  }
return (
  <>
    <header>
      <div className="continue-shopping">
        <img src={ThumbsUpBlack} alt="thumsup" className="thumb-icon"/>
        <h3>Continue Shopping</h3>
      </div>
      <div className="cart-icon">
        <img src={Cartlogo} alt="cart" className="cart-logo"/>
        <span  className="number-logo">{totalItems}</span>

      </div>
      <hr/>
    </header>
    <section className="main-app">
      <h5 className="shoppinglabel">Shopping cart</h5>
      <p className="additems">You have <span>{totalItems}</span> items in Shopping cart</p>
          <div className="main-cart">
             <div className="cart-items-container">
      <Scrollbars >
        {items.map((curItem)=>{
           return <Items key={curItem.id} {...curItem}/>
        })}

        </Scrollbars>
         </div>
    </div>
    <div className="card-details">
    <h4>Card Total: <span>{totalprice}</span>{''}<span>RS</span></h4>
    <button className="checkoutctA">Checkout</button>
    <button className="checkoutctB" onClick={()=>clearCartItems()}>ClearCart</button>

    </div>
</section>
   </>
  );
};

export default ContextCart;
