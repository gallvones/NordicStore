import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'; 
import './CartButton.css';
const CartButton = () => {
  return (
    <div className='space-cart'>
    <button type='button' className= "cart">
        <AiOutlineShoppingCart/>
<span className='status'>0</span>
    </button>
    </div>
  )
}

export default CartButton