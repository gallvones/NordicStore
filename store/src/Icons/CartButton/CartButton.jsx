import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import {AiOutlineShoppingCart} from 'react-icons/ai'; 
import './CartButton.css';

const CartButton = () => {
const {itemsCart} = useContext(AppContext);
const itemsOnCart = itemsCart.length
  return (
    <div className='space-cart'>
    <button type='button' className= "cart" >
        <AiOutlineShoppingCart/>
<span className='status'>{itemsOnCart}</span>
    </button>
    
    </div>
  )
}

export default CartButton