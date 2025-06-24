import React, { useEffect, useState } from 'react';
import '../MercadoPago/Success.css';
import Logo from '../../Components/img/logo3.png';
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Sucess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // inicia em 5 segundos

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const userName = user?.name || '';
  const userSurname = user?.surname || '';

  const backendURL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:3001'
      : 'https://nordic-store.onrender.com';

  useEffect(() => {
    const sendSuccessMail = async () => {
      const totalValueOrder = localStorage.getItem('totalValue');
      const storedForms = JSON.parse(localStorage.getItem('freightForms'));
      const cartItems = JSON.parse(localStorage.getItem('cart'));

      try {
        await fetch(`${backendURL}/successMail`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            totalValueOrder,
            storedForms,
            cartItems,
            
          }),
        });
      } catch (error) {
        console.error('Erro na requisição para successMail:', error);
      }
    };

    sendSuccessMail();

    // Começa a contagem regressiva
    const interval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    // Após 5 segundos, limpa e redireciona
    const timeout = setTimeout(() => {
      localStorage.removeItem('freightForms');
      localStorage.removeItem('totalValue');
      navigate('/');
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, backendURL]);

  return (
    <div className='all-success-page'>
      <div className='success-page-container'>
        <Link to='/'><img src={Logo} alt="logo" className='img-success-page' /></Link>
        <div className='success-page-message'>
          <h2>Compra Concluída com sucesso!</h2>
          <h2>{userName} {userSurname}, os detalhes da compra foram enviados para o seu e-mail!</h2>
          <div className='check-success-container'><FaCheck /></div>
          <p className='countdown'>Você será redirecionado em {countdown} segundos...</p>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
