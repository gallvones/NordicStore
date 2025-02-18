import React from 'react';
import './HeaderStyle.css';
import Logo from '../img/logo3.png';
import CartButton from '../../Icons/CartButton/CartButton.jsx';
import Instagram from '../../Icons/Instagram/Instagram.jsx';
import Login from '../../Icons/Login/Login.jsx'
import Whatsapp from '../../Icons/Whatsapp/Whatsapp.jsx';
const Header = () => {
  return (

    <div className='header_container'>
    <div className='logo'>
        <img src= {Logo} alt='logo-print' />
        <div className='name'>
          NORDIC STORE
        </div>
        
    </div>
    <div className='anchors'>
    <div className='items_anchors'>
        <div>Camisetas</div>
        <div>Tenis</div>
        <div>Bermudas</div>
        </div>

    </div>
    <div className='icons'>
      <div><Login/></div>
      <div><Instagram/></div>
      <div><Whatsapp/></div>
      <div><CartButton/></div>
    </div>

    </div>
    
    
  )
}

export default Header;