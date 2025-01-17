import React from 'react';
import './HeaderStyle.css';
import Logo from '../img/logo.jpg';
import CartButton from '../CartButton/CartButton';
import Instagram from '../Instagram/Instagram';
import Mail from '../Mail/Mail';

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
        <img src= {Logo} className='name' alt='logo-print' />
    </div>
    <div className='icons'>
      <div><Instagram/></div>
      <div><Mail/></div>
      <div><CartButton/></div>
    </div>
    </div>
  )
}

export default Header;