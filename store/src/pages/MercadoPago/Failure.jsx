import React, {useEffect, useState} from 'react';
import '../MercadoPago/Failure.css';
import Logo from '../../Components/img/logo3.png';
import { BiSolidError } from "react-icons/bi";
import { Link , useNavigate} from 'react-router-dom';
const Failure = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10); // inicia em 5 segundos
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const userName = user?.name || '';
  const userSurname = user?.surname || '';

  const backendURL = 
  window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://nordic-store.onrender.com';

  useEffect(() =>{
    const sendFailureMail = async () => {
      const totalValueOrder = localStorage.getItem('totalValue');
      const storedForms = JSON.parse(localStorage.getItem('freightForms'));
      const cartItems = JSON.parse(localStorage.getItem('cart'));
      try {
       await fetch(`${backendURL}/failureMail`, {
        method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            totalValueOrder,
            storedForms,
            cartItems,
       }),
      });
      }catch(error){
        console.error('Erro na requisição para successMail:', error);
      }
    };
    sendFailureMail();

    const interval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      localStorage.removeItem('freightForms');
      localStorage.removeItem('totalValue');
      navigate('/');
    }, 10000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, backendURL]);
  return (
    <div className='all-failure-page'>
<div className='failure-page-container'>
<Link to='/'><img src={Logo} alt="logo" className='img-failure-page' /></Link>
<div className='failure-page-message'>
  <h2>{userName} {userSurname}, seu pagamento não foi aprovado...</h2>
  <div className='check-failure-container'><BiSolidError/></div>
  <h2>Precisa de ajuda? Nos envie uma mensagem!</h2>
  <h2> (61) 99983-1708</h2>
  <p className='countdown'>Você será redirecionado em {countdown} segundos...</p>
</div>

</div>

    </div>
  )
}

export default Failure