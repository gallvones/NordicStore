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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 1. Busca todos os usuários
      const response = await fetch('http://localhost:3001/allUsers');
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

      // 4. Login bem-sucedido
      localStorage.setItem('loggedUser', JSON.stringify(documentMDB));
      navigate('/'); // Redireciona para a página inicial

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