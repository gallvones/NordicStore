import React from 'react';
import './HeaderStyle.css';
import Logo from '../img/logo3.png';
import CartButton from '../CartButton/CartButton';
import Instagram from '../Instagram/Instagram';
import Mail from '../Mail/Mail';
import Login from '../Login/Login.jsx';

const Header = () => {
  return (
    <div className='header_container'>
    <div className='logo'>
        <img src= {Logo} alt='logo-print' />
    </div>
    <div className='anchors'>
    <div className='items_anchors'>
      <div className='name'>NORDIC STORE</div>
        <div>Camisetas</div>
        <div>Tenis</div>
        <div>Bermudas</div>
        </div>

    </div>
    <div className='icons'>
      <div><Instagram/></div>
      <div><Login/></div>
      <div><Mail/></div>
      <div><CartButton/></div>
      
    </div>
    </div>
  )
}

export default Header;