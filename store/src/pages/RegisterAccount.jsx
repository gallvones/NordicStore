import React, {useState} from 'react'
import Logo from '../Components/img/logo3.png';
import '../pages/RegisterAccount.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    cep: '',
    mail: '',
    password: ''
  });
  const backendURL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://nordic-store.onrender.com';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 

    try {
      const response = await fetch(`${backendURL}/cadastrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
         await response.json(); // process the response of backend
        alert(`${formData.name}${formData.surname}, seus dados foram salvos com sucesso! Redirecionando para a página de login...`) ;
        navigate('/login');
        
      } 
      
      else {
        alert('Este email ja está sendo utilizado! Tente novamente com outro.');
        
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };


  return (
    <div className='registerAccount_container'>
      <form onSubmit={handleSubmit} className='registerForms_container'>
        <Link to='/'><img src={Logo} alt="logo" className='img_logo' /></Link>
        <h1 className='register_title'>Cadastre-se</h1>
        <div className='forms_list'>
          <input type="text" placeholder='Digite seu Nome' name='name' value={formData.nome} onChange={handleChange} required />
          <input type="text" placeholder='Digite seu Sobrenome' name='surname' value={formData.sobrenome} onChange={handleChange} required />
          <input type="tel" placeholder='Telefone com DDD' name='phone' value={formData.telefone} onChange={handleChange} required />
          <input type="text" placeholder='Cep' name='cep' value={formData.cep} onChange={handleChange} required />
          <input type="email" placeholder='E-mail' name='mail' value={formData.email} onChange={handleChange} required />
          <input type="password" placeholder='Senha' name='password' value={formData.senha} onChange={handleChange} required />
        </div>
        <button type="submit" className='submit_button' >Enviar</button>
      </form>
    </div>
  )
}

export default RegisterAccount