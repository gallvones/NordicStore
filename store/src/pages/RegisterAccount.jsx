import React from 'react'
import Logo from '../Components/img/logo3.png';
import '../pages/RegisterAccount.css';
import { Link } from 'react-router-dom';

const RegisterAccount = () => {
  return (
    <div  className='registerAccount_container'>
 <form method="get" action='' className='registerForms_container'>
   <Link to='/'><img src={Logo} alt="logo" className='img_logo'/></Link>
  <h1 className='register_title'>Cadastre-se</h1>
 <div className='forms_list'>
<input type="text" placeholder=' Digite seu Nome' name='name' required  />
<input type="text" placeholder=' Digite seu Sobrenome' name='surname' required/>
<input type="tel" placeholder='Telefone com DDD' name='tel' required/>
<input type="text"placeholder='Cep: (12345-678)' name='cep' required/>
<input type="email" placeholder='E-mail' name='mail_register' required/>
<input type="password" placeholder=' Senha' name='password_register' required/>

 </div>
 <button type="submit" className='submit_button'>Enviar</button>

 </form>
    </div>
  )
}

export default RegisterAccount