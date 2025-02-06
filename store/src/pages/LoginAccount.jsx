import React from 'react'
import Logo from '../Components/img/logo3.png';
import '../pages/loginAccount.css';
import { Link, useNavigate } from 'react-router-dom';
const LoginAccount = () => {
  const navigate = useNavigate();
  return (
    <div  className='loginAccount_container'>
 <form method="get" action='' className='loginForms_container'>
   <Link to='/'><img src={Logo} alt="logo" className='imgLogin_logo'/></Link>
  <h1 className='login_title'>Login</h1>
 <div className='formsLogin_list'>
<input type="email" placeholder='E-mail' name='mail_login' required/>
<input type="password" placeholder=' Senha' name='password_login' required/>

 </div>
 <button type="submit" className='submitLogin_button'>Enviar</button>

 </form>
 <div className='register_page'> Não tem uma conta?<p className='register_link' onClick={() => navigate('/register') } > Registre-se agora!</p></div>
 
    </div>
  )
}

export default LoginAccount