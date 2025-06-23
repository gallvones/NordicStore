import React from 'react';
import '../MercadoPago/Failure.css';
import Logo from '../../Components/img/logo3.png';
import { BiSolidError } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Failure = () => {
  const userString = localStorage.getItem('user')
  const user = userString ? JSON.parse(userString) : null
  const userName = user?.name || ''
  const userSurname = user?.surname || ''
  return (
    <div className='all-failure-page'>
<div className='failure-page-container'>
<Link to='/'><img src={Logo} alt="logo" className='img-failure-page' /></Link>
<div className='failure-page-message'>
  <h2>{userName} {userSurname}, seu pagamento deu errado...</h2>
  <div className='check-failure-container'><BiSolidError/></div>
  <h2>Precisa de ajuda? Nos envie uma mensagem!</h2>
  <h2> (61) 99983-1708</h2>
</div>

</div>

    </div>
  )
}

export default Failure