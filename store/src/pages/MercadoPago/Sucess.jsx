import {React, useEffect} from 'react';
import '../MercadoPago/Success.css';
import Logo from '../../Components/img/logo3.png';
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sucess = () => {


  const userString = localStorage.getItem('user')
  const user = userString ? JSON.parse(userString) : null
  const userName = user?.name || ''
  const userSurname = user?.surname || ''
  const userMail = user?.email || ''

  const backendURL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:3001'
      : 'https://nordic-store.onrender.com';
  useEffect(() => {
    const response = fetch(`${backendURL}/successMail`, {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userName,
        surname: userSurname,
        email: userMail,
      }),
      // if(responseMail.ok){
      //   localStorage.removeItem('freightForms')
      // } em algum momento eu vou ter que apagar do local storage. Antes disso, consuma os dados para enviar o email localizados no freightForms
    });
   
  });
  
  
  return (
    <div className='all-success-page'>
<div className='success-page-container'>
<Link to='/'><img src={Logo} alt="logo" className='img-success-page' /></Link>
<div className='success-page-message'>
  <h2>Compra Concluída com sucesso!</h2>
  <h2> {userName} {userSurname}, os detalhes da compra foram enviados para o seu e-mail!</h2>
  <div className='check-success-container'><FaCheck /></div>
  <h2>Precisa de ajuda? Nos envie uma mensagem!</h2>
  <h2> (61) 99983-1708</h2>
</div>


</div>

    </div>
  )
}

export default Sucess