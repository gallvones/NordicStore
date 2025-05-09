import { useState } from 'react';
import React from 'react';
import Logo from '../Components/img/logo3.png';
import '../pages/loginAccount.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginAccount = () => {  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const backendURL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://nordic-store.onrender.com';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      // 1. Busca todos os usuários
      const response = await fetch(`${backendURL}/allUsers`);
      const users = await response.json();

      // 2. Verifica se existe um usuário com o email digitado
      const documentMDB = users.find(user => user.mail === email);
   
      if (!documentMDB ) {
        const errorEmail = new Error ('Email não cadastrado');
        throw errorEmail;
      }

      // 3. Compara a senha diretamente (sem bcrypt)
      if (documentMDB.password !== password) {
        const errorPassword = new Error('Senha incorreta!');
        throw  errorPassword;
        
      } 
      const { password:pwdFromDb, ...userWithoutPassword } = documentMDB; // Remove o campo 'password'
      const userMail = await fetch (`${backendURL}/usertoken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userWithoutPassword})
      });
      if(userMail.ok){
       const {token, user} = await userMail.json();
       localStorage.setItem('authToken', token);
       localStorage.setItem('user', JSON.stringify(user));
       console.log(`${localStorage}`)
       navigate('/');
      } if (!userMail.ok) {
        const err = await userMail.json();
        throw new Error(err.error || 'Erro ao buscar usuários');
      }
      

    } catch (error) {
      setError(error.message);
      
      
    }
  };

  return (
    <div className='loginAccount_container'>
      <form onSubmit={handleSubmit} className='loginForms_container'>
        <Link to='/'><img src={Logo} alt="logo" className='imgLogin_logo'/></Link>
        <h1 className='login_title'>Login</h1>
        
        {error && <p className='error-message'>{error}</p>}

        <div className='formsLogin_list'>
          <input 
            type="email" 
            placeholder='E-mail' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder='Senha' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='submitLogin_button'>Enviar</button>
      </form>
      

      
      <div className='links-pages-container'>
      <div className='recovery-password'>
        <p>Esqueceu sua senha? <span className='link-recovery-password' onClick={() => navigate('/changePassword')}>Altere-a!</span></p>
      </div>
      <div className='register_page'>
        Não tem uma conta?
        <p className='register_link' onClick={() => navigate('/register')}>Registre-se agora!</p>
      </div>
      </div>
    </div>
  );
};

export default LoginAccount;