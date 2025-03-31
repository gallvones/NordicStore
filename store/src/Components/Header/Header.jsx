// src/Components/Header/Header.jsx
import React, { useContext } from 'react';
import './HeaderStyle.css';
import Logo from '../img/logo3.png';
import CartButton from '../../Icons/CartButton/CartButton.jsx';
import Instagram from '../../Icons/Instagram/Instagram.jsx';
import Login from '../../Icons/Login/Login.jsx';
import Whatsapp from '../../Icons/Whatsapp/Whatsapp.jsx';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const Header = () => {
    const { toggleCart } = useContext(AppContext); 

    return (
        <div className='all_header'>
            <div className='header_container'>
                <Link to='/'>
                    <div className='logo'>
                        <img src={Logo} alt='logo-print' />
                        <div className='name'>NORDIC STORE</div>
                    </div>
                </Link>
                <div className='anchors'>
                    <div className='items_anchors'>
                        <div><Link to='/section1'>Camisetas</Link></div>
                        <div><Link to='/section2'>Tênis</Link></div>
                        <div><Link to='/section3'>Bermudas</Link></div>
                        <div><Link to='/login'>Pedidos</Link></div>
                    </div>
                </div>
                <div className='icons'>
                    <div><Login /></div>
                    <div><Instagram /></div>
                    <div><Whatsapp /></div>
                    <div onClick={toggleCart}><CartButton /></div> 
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;