import React from 'react';
import Search from '../Search/Search';
import './HeaderStyle.css';
import CartButton from '../CartButton/CartButton';
import Lightning from '../Lightning/Lightning';
const Header = () => {
  return (
    <header className='header'>
    <div className='container'>
        <p className='name'> NORDIC STORE</p>
        <Lightning/>
        <Search/>
        <CartButton/>
    </div>
    </header>
  )
}

export default Header;