import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'; 
import './CartButton.css';
const CartButton = () => {
  return (
    <button type='button' className= "cart">
        <AiOutlineShoppingCart/>
<span className='status'>0</span>
    </button>
  )
}

export default CartButton