// CartMenu.jsx
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { BsFillCartXFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import './CartMenu.css';
import { Link } from 'react-router-dom';
const CartMenu = () => {
  const { itemsCart, setItemsCart, cartMenu, toggleCart, isLogged, setIsLogged } = useContext(AppContext);

  const updateQuantity = (idx, delta) => {
    const newItems = [...itemsCart];
    newItems[idx].quantity = Math.max(1, newItems[idx].quantity + delta);
    setItemsCart(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  // atualiza só o tamanho do item no índice idx
  const updateSize = (idx, size) => {
    const newItems = [...itemsCart];
    newItems[idx].size = size;
    setItemsCart(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  const total = itemsCart.reduce((sum, item) => {
    const price = typeof item.price === 'string'
      ? parseFloat(item.price.replace(/[^0-9.,]/g, '').replace(',', '.'))
      : item.price;
    return sum + price * item.quantity;
  }, 0);

  const removeItem = (idx) => {
    const updatedItems = itemsCart.filter((_, index) => index !== idx);
    setItemsCart(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  };
  
  return (
    <div className={cartMenu ? 'cart-menu-open' : 'cart-menu-close'}>
      <div className={cartMenu ? 'empty-cart-open' : 'empty-cart-close'}>
        <button className='button_close' onClick={toggleCart}>
          <IoMdCloseCircle />
        </button>

        {itemsCart.length === 0 ? (
          <>
            <p>Seu carrinho está vazio!</p>
            <p className='cart_icon_empty'><BsFillCartXFill /></p>
          </>
        ) : (
          <div className='items-cart-container'>
            <ul className='items-cart'>
              {itemsCart.map((item, index) => {
                const price = typeof item.price === 'string'
                  ? parseFloat(item.price.replace(/[^0-9.,]/g, '').replace(',', '.'))
                  : item.price;

                // garante um tamanho padrão caso ainda não tenha sido definido
                const currentSize = item.size || 'G';

                return (
                  <li key={index} className='item-cart-row'>
                    <img src={item.img} alt={item.title} className='item-cart-image' />
                    <div className='item-cart-info'>
                      <p className='item-cart-title'>{item.title}</p>

                      <p className='item-cart-size-container'>
                        Tamanho:
                        {['M', 'G', 'GG'].map(size => (
                          <button
                            key={size}
                            className={
                              currentSize === size
                                ? `item-cart-size-${size.toLowerCase()}-click`
                                : `item-cart-size-${size.toLowerCase()}`
                            }
                            onClick={() => updateSize(index, size)}
                          >
                            {size}
                          </button>
                        ))}
                      </p>

                      <p className='item-cart-quantity'>
                        Quantidade:
                        <button
                          className='decrease-quantity-oncart'
                          onClick={() => updateQuantity(index, -1)}
                        >
                          -
                        </button>
                        <span className='quantity-oncart'>{item.quantity}</span>
                        <button
                          className='increase-quantity-oncart'
                          onClick={() => updateQuantity(index, +1)}
                        >
                          +
                        </button>
                      </p>
                     <div className='price-and-trash'>
                      <p className='item-cart-price'>
                        Valor: R${(price * item.quantity).toFixed(2)}
                      </p>
                      <div className='remove-item-from-cart'> <FaTrash onClick={() => removeItem(index)}/></div>
                      </div>
                      
                    </div>
                    
                  </li>
                );
              })}
            </ul>

            <div className='total-value'>
              <strong>Valor Total:</strong> R${total.toFixed(2)}
            </div>

            <div className='cart-button-pay-container'>

             {isLogged ? 
             <Link to='/freight'><button className='cart-button-pay'>Finalizar Compra</button></Link> : <Link to='/login'><button className='cart-button-pay'>Finalizar Compra</button></Link> 
            
            }
    
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartMenu;
