import React from 'react';
import './CartMenu.css'; // Estilos específicos para o CartMenu

const CartMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-menu-overlay">
      <div className="cart-menu">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Carrinho de Compras</h2>
        {/* Aqui você pode adicionar os itens do carrinho */}
        <div className="cart-items">
          {/* Exemplo de item */}
          <div className="cart-item">
            <span>Produto 1</span>
            <span>R$ 50,00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;