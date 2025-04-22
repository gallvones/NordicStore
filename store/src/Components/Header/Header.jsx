import React, { useContext, useState, useEffect } from 'react';
import './HeaderStyle.css';
import Logo from '../img/logo3.png';
import CartButton from '../../Icons/CartButton/CartButton.jsx';
import Instagram from '../../Icons/Instagram/Instagram.jsx';
import Login from '../../Icons/Login/Login.jsx';
import Whatsapp from '../../Icons/Whatsapp/Whatsapp.jsx';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const Header = () => {
  const { toggleCart } = useContext(AppContext);
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  const [userSurName, setUserSurName] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  // Verifica se há token e usuário no localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLogged(!!token);

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { name, surname } = JSON.parse(storedUser);
      if (name) setUserName(name);
      if (surname) setUserSurName(surname);
    }
  }, []);

  const handleProfile = () => {
    navigate('/profile');
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLogged(false);
    navigate('/login');
  };

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
            <div><Link to={isLogged ? '/orders' : '/login'}>Pedidos</Link></div>
          </div>
        </div>

        <div className='icons'>
          {/* Login / Menu */}
          {isLogged ? (
            <div
              className='login-menu-container'
              
            >
              {/* Ícone navega para '/' quando logado */}
              <div
                className='login-icon'
                onClick={() => navigate('/')}
                onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
              >
                <Login />
              </div>

              {/* Saudação fixa (não afeta o layout) */}
              <p className='login-greeting'>
                Olá, <span>{userName} {userSurName}</span>!
              </p>

              {/* Menu dropdown */}
              {showMenu && (
                <div className='login-menu' onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                  <button onClick={handleProfile} >Perfil</button>
                  <button onClick={handleLogout} >Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to='/login'>
              <Login />
            </Link>
          )}

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