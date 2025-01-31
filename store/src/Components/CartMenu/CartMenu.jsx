import React from 'react';
import './CartMenu.css'; 
import { BsFillCartXFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";


const CartMenu = () => {
  return (
    <div className='cart_menu' >
      <div className='empty_cart'>
        <button className='button_close'> <IoMdCloseCircle /></button>
        <p>Seu carrinho está vazio!</p>
        <p className='cart_icon_empty'><BsFillCartXFill/></p>
        
      </div>
    </div>
  );
};

export default CartMenu;