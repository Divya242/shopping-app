import React , {useContext} from 'react';
import { CartContext } from './Cart';

const Items = ({id,tittle,description,price,img,quantity})=> {

  const {removeItem,addquantity,minusquantity} = useContext(CartContext);

  return (
  <>
  <div className="item-info">
                <div className="product-img">
                <img src={img} alt="mobile" className="item-image" />
                </div>
                <div className="product-tittle">
                <h2>{tittle}</h2>
                <p>{description}</p>
                </div>
                <div className="add-minus">
                <i className="fas fa-minus" onClick={()=>minusquantity(id)}></i>
                <input type="text" placeholder={quantity} className="quantity"/>
                <i className="fas fa-plus" onClick={()=>addquantity(id)}></i>
                </div>
                <div className="price">
                <h5>{price}</h5>
                </div>
                <div className="remove-item">
                <i className="fas fa-trash" id="trash" onClick={() => removeItem(id)}></i>
                </div>
              </div>
          <hr/>
</>

  )
}

export default Items;
