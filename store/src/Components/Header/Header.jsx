import React, { useContext, useState, useEffect, useCallback } from 'react';
import './HeaderStyle.css';
import Logo from '../img/logo3.png';
import CartButton from '../../Icons/CartButton/CartButton.jsx';
import Login from '../../Icons/Login/Login.jsx';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const Header = () => {
  const { cartMenu, toggleCart } = useContext(AppContext);
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  const [userSurName, setUserSurName] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  // Função de logout  
  const handleLogout = useCallback(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLogged(false);
    navigate('/login');
  }, [navigate]);

  // Efeito que verifica o token e dados do usuário
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLogged(!!token);

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { name, surname } = JSON.parse(storedUser);
      setUserName(name || '');
      setUserSurName(surname || '');
    }
  }, []);

  // Efeito para logout automático após tempo definido
  useEffect(() => {
    if (!isLogged) return;

    const LOGOUT_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutos
    const timerId = setTimeout(() => {
      handleLogout();
    }, LOGOUT_TIMEOUT_MS);

    return () => clearTimeout(timerId);
  }, [isLogged, handleLogout]);

  const handleProfile = () => {
    navigate('/profile');
    setShowMenu(false);
  };

  return (
    <div className={cartMenu ? 'all-header-with-menu-open' : 'all-header'}>
      <div className='header_container'>
        <Link to='/'>
          <div className='logo'>
            <img src={Logo} alt='logo-print' />
            <div className='name'>NORDIC STORE</div>
          </div>
        </Link>

        <div className='anchors'>
          <div className='items_anchors'>
            <div><Link to='/section1'>Camisetas Estampadas</Link></div>
            <div><Link to='/section2'>Tênis</Link></div>
            <div><Link to='/section3'>Camisetas Lisas</Link></div>
            
          </div>
        </div>

        <div className='icons'>
          {isLogged ? (
            <div className='login-menu-container'>
              <div
                className='login-icon'
                onClick={() => navigate('/')}
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <Login />
                
              </div>
              <p className='login-greeting'>
                Olá, <span>{userName} {userSurName}</span>!
              </p>
              {showMenu && (
                <div
                  className='login-menu'
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                >
                  <button onClick={handleProfile}>Perfil</button>
                  <button onClick={handleLogout}>Logout</button>
                  
                </div>
              )}
              
            </div>
          ) : (
            <Link to='/login'>
              <Login />
            </Link>
          )}
          <div onClick={toggleCart}><CartButton /></div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;