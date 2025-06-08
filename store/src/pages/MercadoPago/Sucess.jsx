import React from 'react';
import '../MercadoPago/Success.css';
import Logo from '../../Components/img/logo3.png';
import { FaCheck } from "react-icons/fa";
const Sucess = () => {
  return (
    <div className='all-success-page'>
<div className='success-page-container'>
<img src={Logo} alt="logo" className='img-success-page' />
<div className='success-page-message'>
  <h2>Compra Concluída com sucesso!</h2>
  <h2>Os detalhes da compra foram enviados para o seu e-mail.</h2>
</div>
<div className='check-container'><FaCheck /></div>
</div>

    </div>
  )
}

export default Sucess