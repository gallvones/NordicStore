
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
        <div className='cart-button-pay-container'> <button className='cart-button-pay'> Finalizar Compra</button></div>
      </div> 
    </div>
  );
};

export default CartMenu;