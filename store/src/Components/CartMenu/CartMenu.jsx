
import { useContext } from 'react';
import './CartMenu.css';
import { BsFillCartXFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import AppContext from '../../context/AppContext';

const CartMenu = () => {
    const { cartMenu, toggleCart } = useContext(AppContext); // Pega estado e função do contexto

    return (
        <div className={cartMenu ? 'cart-menu-open' : 'cart-menu-close'}>
            <div className={cartMenu ? 'empty-cart-open' : 'empty-cart-close'}>
                <button className='button_close' onClick={toggleCart}>
                    <IoMdCloseCircle />
                </button>
                <p>Seu carrinho está vazio!</p>
                <p className='cart_icon_empty'><BsFillCartXFill /></p>
                <div className='cart-button-pay-container'>
                    <button className='cart-button-pay'>Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
};

export default CartMenu;